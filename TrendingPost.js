import React, { Component } from 'react'

export class TrendingPost extends Component {
    render() {
        return (
            <main>
                <h3 class="LatestPosts__LatestPostHeading__1-yOc">Latest Posts</h3>
                <p style={{ display: "flex" }} >
                    <i className='fa fa-filter' style={{ color: "blue", display: "block", marginTop: "2px" }} >  </i>
                    <span style={{ display: "block", marginLeft: "10px" }}> Filter by category </span> </p>
                <div id="filter-wrapper" >
                    <span className='filter-all' > All </span>
                    <span className='filter-name' > Artificial Intelligence </span>
                    <span className='filter-name' > Cloud Coumpting </span>
                    <span className='filter-name' > DevOps </span>
                    <span className='filter-name' > Programming Languages </span>
                    <span className='filter-name' >  Mobile Application Development </span>
                    <span className='filter-name' >  Technology and Tools </span>
                    <span className='filter-name' >  Get a Job in a Tech Company </span>
                    <span className='filter-name' > Others </span>

                </div>

                <div id = "blog-card-wrapper">
                    <div className='blog-card'>
                     <img src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg" alt="Edyoda-Stories" className='blog-image'/>
                     
                 	<h3 className='title'>edYoda Meetup #01 : A Date with Cloud</h3><br> 
                     <p className='author'>Ashish Pandey <span style="font-style:normal;color:black;" >| 05 Jul 2019</span></br></p>  <br>
                     <h6  className='text'>I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the...</br></h6>

                    </div>

                    <div id = "blog-card-wrapper">
                    <div className='blog-card'>
                     <img src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg" alt="Edyoda-Stories"  className='blog-image'/>
                     
                 	<h3 className='title'>From identity crisis to the Success Story - Th...</h3><br> 
                     <p className='author'>Kalyan Mahalingam <span style="font-style:normal;color:black;" >| 05 Jul 2019</span></br></p>  <br>
                     <h6  className='text'>DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the...</br></h6>

                    </div>

                    <div id = "blog-card-wrapper">
                    <div className='blog-card'>
                     <img src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup--small_b2EXhBe.jpg" alt="Edyoda-Stories" className='blog-image'/>
                     
                 	<h3 className='title'>Typical day of Data Scientist - An insider..</h3><br> 
                     <p className='author'>Saurav Ghosh <span style="font-style:normal;color:black;" >| 05 Jul 2019</span></br></p>  <br>
                     <h6  className='text'>I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right -" Big Data and Data Science are the foundation of all the trends that...</br></h6>

                    </div>

                    <div id = "blog-card-wrapper">
                    <div className='blog-card'>
                     <img src="thumbnail" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg" alt="Edyoda-Stories" className='blog-image'/>
                     
                 	<h3 className='title'>Amazon Web Services (AWS) Cloud Day -...</h3><br> 
                     <p className='author'>Kalyan Mahalingam <span style="font-style:normal;color:black;" >| 05 Jul 2019</span></br></p>  <br>
                     <h6  className='text'>It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels...</br></h6>

                    </div>

                    <div id = "blog-card-wrapper">
                    <div className='blog-card'>
                     <img src="https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg" alt="Edyoda-Stories" className='blog-image'/>
                     
                 	<h3 className='title'>Industry 4.0 - The Prospects & Journey...</h3><br> 
                     <p className='author'>Pitanjal Dutta <span style="font-style:normal;color:black;" >| 05 Jul 2019</span></br></p>  <br>
                     <h6  className='text'>I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the...</br></h6>

                    </div>

                    <div id = "blog-card-wrapper">
                    <div className='blog-card'>
                     <img src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg" alt="Edyoda-Stories" className='blog-image'/>
                     
                 	<h3 className='title'>Master your General Aptitude Job Interview...</h3><br> 
                     <p className='author'>Pitanjal Dutta <span style="font-style:normal;color:black;" >| 05 Jul 2019</span></br></p>  <br>
                     <h6  className='text'>A general aptitude becomes very important, when you apply for a job in a tech company. You might be highly skilled in your subject domain. However, these basic...</br></h6>

                    </div>

                </div>


            </main>
        )
    }
}

export default TrendingPost
