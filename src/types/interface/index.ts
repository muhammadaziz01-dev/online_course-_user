


// --------- Authorization  -------------
export interface Signin{
    email: string;
    password: string;
}

export interface Signup extends Signin{
    role: string;
}
export interface Request{
    signin:(data:Signin)=>any,
    signup:(data:Signup)=>any,
}
// =-=-=---=--=--=-=-=--=--=--=--=---=-=-=-=--


// ------ Courses Request ------------------

interface postCourses {
    title: string;
    description: string;
    photo: string;
    lessonsCount: number;
}

interface UpdateCourses extends postCourses{
    _id: number;
}

export interface CoursesRequest {
    getCourses : ()=> any,
    postCourses : (data:postCourses)=> any,
    deleteCourses : (id:string)=> any,
    updateCourses: (data:UpdateCourses)=> any,
}

export interface StoreCourses {
    isLoader:boolean;
    dataCourses:any[];
    getDataCourses: ()=> Promise <any>;
    postDataCourses: (data:postCourses)=> Promise <any>;
    deleteDataCourses: (id:string)=> Promise <any>;
    updateDataCourses: (data:UpdateCourses)=> Promise <any>;
}
//=-=-=-========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// ------ Lessons Request ------------------

interface postLessons {
    title: string;
    video: string;
    courseId: string;
}

interface UpdateLessons extends postLessons{
    _id: number;
}

export interface LessonsRequest {
    getLessons : (id:string|undefined)=> any,
    postLessons : (data:postLessons)=> any,
    deleteLessons : (id:string)=> any,
    updateLessons: (data:UpdateLessons)=> any,
}

export interface StoreLessons {
    isLoader:boolean;
    dataLessons:any[];
    getDataLessons: (id:string|undefined)=> Promise <any>;
    postDataLessons: (data:postLessons)=> Promise <any>;
    deleteDataLessons: (id:string)=> Promise <any>;
    updateDataLessons: (data:UpdateLessons)=> Promise <any>;
}
//=-=-=-========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-












// ------------------------------------