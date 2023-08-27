import InstructorPortal6th from '../../Components/InstructorPortal/InstructorPortal6th';
import WelcomeBackAndViewPortal from '../../Components/InstructorPortal/WelcomeBackAndViewPortal'
import NumberUpcomingAndOningAndCompleted from '../../Components/InstructorPortal/NumberBarUpcomingOngoingCompleted'
import AllClear1 from '../../Components/InstructorPortal/AllClear1';
import UpcomingCourses from '../../Components/InstructorPortal/UpcomingCourses';
import OngoingCoursesAndUpcomingExams from '../../Components/InstructorPortal/OngoingCoursesAndUpcoming Exams';

import '../../Components/InstructorPortal/style.css'
function StudentPortal6thPage() {
     return (
          <>
               <div className='container11 '>
                    <div className='overlayOnImage1'></div>
                    <InstructorPortal6th />
                    <WelcomeBackAndViewPortal />
                    <NumberUpcomingAndOningAndCompleted />
                    <AllClear1 />
               </div>

               <div className='background-color1'>
                    <div className=' container22'>
                         <OngoingCoursesAndUpcomingExams />
                         <UpcomingCourses />
                    </div >
               </div>
          </>
     );
}

export default StudentPortal6thPage;
