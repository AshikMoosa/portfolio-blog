
import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import {getBlogBySlug, getAllBlogs} from 'lib/api';
import { Row, Col } from 'react-bootstrap'
import BlogContent from 'components/BlogContent';
import {urlFor} from 'lib/api';

const BlogDetail = ({blog}) => {
 
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <div style={{display:"table", paddingLeft:"10px", paddingRight:"10px"}}>
          <BlogHeader 
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={blog.date}
            image={urlFor(blog.coverImage).height(600).url()}
          />
          <hr/>
         <BlogContent  content = {blog.content}/>
         </div>
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps({params}) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog
    }
  }
}

export async function getStaticPaths({params}) {
  const blogs = await getAllBlogs();
  const paths = blogs?.map(b => {
    return {
      params : {slug: b.slug}
    }
  })
  return {
  paths,
  fallback: false
  }
}

export default BlogDetail;