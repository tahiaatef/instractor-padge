import image1 from '../../Images/secondary_background.jpg'
function CardUpcomingCourses(props) {
    return (
       

<div className='col-lg-6'>

            <div className=' row  mb-5   Upcoming-Courses '>
                <div className='card-body col-lg-4 col-12 '>
                    <img className="  Upcoming-Courses-image m-auto" src={image1} alt="Card image"  />

                </div>

                <div className='card-body col-lg-8 col-12 Upcoming-Courses-text1 '>
                    <h4 class="card-title upcoming-courses-title1">{props.title}</h4><br />
                    <div className="row justify-content-center">


                        <div className="col-12 " >
                            <i class="fas fa-calendar-alt upcoming-courses-icon1"> </i><span class="  upcoming-courses-subtitle1 "> {props.subtitle1}</span><br />
                            <i class="far fa-list-alt  upcoming-courses-icon1 "> </i> <span class="  upcoming-courses-subtitle1 "> {props.subtitle2}</span><br /><br />
                        </div>

                        <div className="col-12 clearfix">
                            <h5 className='float-start upcoming-courses-lev1'>LEV.1</h5>
                            <button class="btn float-end upcoming-courses-button">VIEWDETAILS</button>
                        </div>
                    </div>

                </div>
            </div>




            </div>





    
    );
}
export default CardUpcomingCourses;