import MySchedule from "../pages/student/MySchedule";
import OfferedCourse from "../pages/student/OfferedCourse";

export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <MySchedule></MySchedule>
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCourse></OfferedCourse>
    }
]