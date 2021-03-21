import { useEffect, useState } from 'react';
import moment from 'moment';
import { Col,Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

import { useGetBlogsPages } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';

function getCachedFilter(filter) {
  return typeof window !== 'undefined' && window[filter] || 0;
}


export const BlogList = ({data = [], filter}) => {
  return data.map(page => page.map(blog =>
    filter.view.list ?
      <Col key={`${blog.slug}-list`} md="9">
        <CardListItem
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format('LL')}
          link={{
            href: '/blogs/[slug]',
            as: `/blogs/${blog.slug}`
          }}
        />
      </Col>
      :
      <Col key={blog.slug} lg="4" md="6">
        <CardItem
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format('LL')}
          image={blog.coverImage}
          link={{
            href: '/blogs/[slug]',
            as: `/blogs/${blog.slug}`
          }}
        />
      </Col>
  ))
}

export default function Blog({blogs}) {
  const [filter, setFilter] = useState({
    view: { list: getCachedFilter('BLOG_VIEW')},
    date: { asc: getCachedFilter('BLOG_DATE')}
  });

  const {
    data, size, setSize, hitEnd
  } = useGetBlogsPages({filter});

  return (
    <PageLayout>
      
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({...filter, [option]: value})
          window[`BLOG_${option.toUpperCase()}`] = option === 'view' ? value.list : value.asc;
          }
        }
      />
      <hr/>
      <Row className="mb-5" style={{ padding: '20px 0px' }}>
      <BlogList data={data || [blogs]} filter={filter} />
      </Row>
      <div style={{textAlign: 'center'}}>
        <Button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          size="lg"
          variant="outline-secondary">
          {/* {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'}*/}
          Load More
        </Button>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  return {
    props: {
      blogs
    },
    revalidate: 1
  }
}