const Info = Vue.component("About", {
    template :`
    <div>
        <div class="navbar navbar-expand-lg navbar-secondry bg-secondry">
            <ul class="nav nav-pills">
                <li class="nav-item" v-on:click="home"><a class="nav-link"> Tech Stack </a></li>
                <li class="nav-item"><a class="nav-link active"> Personal Info. </a></li>
            </ul>
            <span style="float:right;">
                <a href="https://www.github.com/abhineetraman"> <img id="github" src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"> </a> &emsp; 
            </span>
            <hr style="color: white;">
        </div>
        <div class="row">
            <div class="col-sm-9">
                <h1 style="text-align: left;"> Abhineet Raman </h1>
                <br>
                <p> 
                    A skilled learner in the field of full-stack web development with an addition of data science related skills like statistical analysis, Business Analytics, Machine Learning and Artificial Intelligence.
                    I am looking for the role of <b>full-stack development, machine learning engineers and software developer</b>.
                </p>
            </div>
            <div class="col-sm-3">
                <img src="./static/abhi.jpg" style="width: 200px; height:200px; border-radius: 20px;">
            </div>
        </div>
        <div class="row">
            <h2 style="font-size:40px; text-align: left;"> Education </h2>
            <br>
            <div class="col-sm-4">
                <div class='newsCard news-Slide-up'>
                    <img src="https://w7.pngwing.com/pngs/54/748/png-transparent-indian-institute-of-technology-madras-department-of-management-studies-iit-madras-doctor-of-philosophy-student-indian-institutes-of-technology-student-people-logo-india.png" />
                    <div class='newsCaption'>
                        <h2 class='newsCaption-title'>BS in Programming and Data Science</h2>
                        <p class='newsCaption-content'>
                            Completed Diploma Level. CGPA : 7. 68(Current)
                            <br>
                            Pursuing Degree level.
                        </p>
                        <p>Jan 2021 - Dec 2024</p>    
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class='newsCard news-Slide-up'>
                    <img src="https://w7.pngwing.com/pngs/136/352/png-transparent-faculty-of-law-university-of-delhi-daulat-ram-college-student-thumbnail.png" />
                    <div class='newsCaption'>
                        <h2 class='newsCaption-title'>B.Sc.(Hons.) Computer Science</h2>
                        <p class='newsCaption-content'>
                            Graduated with Distinction. CGPA : 8.85
                            <br>
                            Department Topper in 2022
                        </p>
                        <p> Jul 2020 - Jun 2023 </p> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class='newsCard news-Slide-up'>
                    <img src="data:image/jpeg;base64,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" />
                    <div class='newsCaption'>
                        <h2 class='newsCaption-title'>High School</h2>
                        <p class='newsCaption-content'>
                            Completed High School with achiever's list. Percentage: 90.75
                            <br>
                            Head Boy of the school.
                        </p>
                        <p> Apr 2018 - Apr 2020 </p>    
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h2 style="font-size:40px; text-align: left;"> Achievements </h2>
            <br>
            <div class="col-sm-6">
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <h2 class="flip-title"> <b> Scholastic </b></h2>
                        </div>
                        <div class="flip-box-back">
                            <b>
                                <ol class="list" start="1">
                                    <li> 1. Completed Foundation and Diploma in Computer Science. </li>
                                    <li> 2. Participated in Hackathon(CIC 2023). </li>
                                    <li> 3. Participated in CP(Python Coding Challenge 2023). </li>
                                    <li> 4. Head Boy in High School. </li>
                                    <li> 5. Core member of House website development Team. </li>
                                    <li> 6. Teaching Assistant in Application Development Course. </li>
                                </ol>
                            </b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <h2 class="flip-title"><b> Non Scholastic </b></h2>
                        </div>
                        <div class="flip-box-back">
                            <b>
                            <ol class="list" start="1">
                                <li> 1. Event Coordinator in the College Chess Competition </li>
                                <li> 2. 2019 and 2018 zonal winner in Chess. Inter College Chess Tounament top scorer.(2023)  </li>
                                <li> 3. 2019 and 2018 zonal winner in Basketball. </li>
                                <li> 4. Participated in s7 national level poetry competition </li>
                                <li> 5. College level winner in poetry competition </li>
                            </b></ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <div>
            <a href="mailto:abhineetraman@gmail.com"> <img src="https://icons.iconarchive.com/icons/bootstrap/bootstrap/512/Bootstrap-envelope-icon.png" style="height: 40px; width: 50px;" /></a>
            <br>
            ©️2002-2024 Abhineet Raman
        </div>
    </div>
    `,

    data : function(){
        return{

        }
    },

    methods : {
        home : function(){
            return router.push("/")
        }
    }
})

const Tech = Vue.component("Tech-info", {
    template :`
    <div>
        <div class="navbar navbar-expand-lg navbar-secondry bg-secondry">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href=# class="nav-link active"> Tech Stack </a></li>
                <li class="nav-item" v-on:click="about"><a class="nav-link"> Personal Info. </a></li>
            </ul>
            <span style="float:right;">
                <a href="https://www.github.com/abhineetraman"> <img id="github" src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"> </a> &emsp; 
            </span>
            <hr style="color: white;">
        </div>
        <div class="row">
        <div class="col-sm-3" style="padding-left: 2px;">
            <div class="container mt-3">
            <div class="card">
            <img src="./static/t1.png" alt="Thumbnail description" v-on:click="play1">
                <div class="card-body">
                <h2 class="card-title">Event Booking System</h2>
                <p class="card-text">A Web based application where admin have rights to <b>create, edit and delete events, venue and location</b>. He can dowload <b>reports</b> of every event. On the another hand User can book, rate and add profile. He also gets monthly reports of bookings and daily reminder on mail.</p>
                <a href="#" class="btn btn-primary"> Project Code</a>
                </div>
            </div>
            </div>
        </div>
        <div class="col-sm-3" style="padding-left: 2px;">
            <div class="container mt-3">
                <div class="card">
                    <img src="./static/t2.png" alt="Thumbnail description" v-on:click="play2">
                    <div class="card-body">
                    <h2 class="card-title">Job Search App</h2>
                    <p class="card-text">A Web based application where admin have rights to <b>create, edit and delete jobs and its location</b>. On the another hand User can Apply for all the available jobs and able to add his profile data. He is also able to see the applied jobs so that he can track his applied jobs record.</p>
                    <a href="https://www.github.com/abhineetraman/Job-webapp" class="btn btn-primary"> Project Code</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3" style="padding-left: 2px;">  
            <div class="container mt-3">
                <div class="card">
                    <img src="./static/t3.png" alt="Thumbnail description" v-on:click="play3">
                    <div class="card-body">
                        <h2 class="card-title">ML Taxi-fare Prediction</h2>
                        <p class="card-text">A Machine Learning Model training and visualing the Predictions made by model by using multiple models like Polynomial Regression, Decision Tree, KNN, Multi-Layer Perceptron, AdaBoost and RandomForest with an accuracy more than 93% that can be used to predict future price based on the data.</p>
                        <a href="https://www.kaggle.com/code/abhineetraman/21f1005523-notebook-t32023" class="btn btn-primary">Project Code</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3" style="padding-left: 2px;">
            <div class="container mt-3">
                <div class="card">
                    <img src="./static/t4.png" alt="Thubnail description" />
                    <div class="card-body">
                        <h2 class="card-title">Bcas-Club System</h2>
                        <p class="card-text">A Web based application admin have rights to <b> create, edit and delete events and its posters.</b>. He can also upload <b> Images </b> of every event. On the another hand, Student can apply to event through posters, can join clubs and get the information about clubs and its core members and their cordinators.
                        </p>
                        <a href="https://github.com/abhineetraman/bcas-clubs" class="btn btn-primary">Project Code</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <br>
        <div class="row">
        <div class="col-sm-9">
            <div class="row">
            <div class="col-sm-4">
                <div class="d-flex flex-column" id="heading">
                    <h4 class="p-2"> Databases</h4>
                </div>
                <div class="d-flex flex-column" id="content">
                <ul class="list-group" style="list-style-type:circle">
                    <li class="list-group-item list-group-item-warning">MySQL </li>
                    <li class="list-group-item list-group-item-warning">Postgres </li>
                    <li class="list-group-item list-group-item-warning">SQLite </li>
                    <li class="list-group-item list-group-item-warning">Redis </li>
                </ul>
                </div>
            </div>
            <div class="col-sm-4" style="padding-left: 2px;">
                <div class="d-flex flex-column" id="heading">
                    <h4 class="p-2"> Backend</h4>
                </div>
                <div class="d-flex flex-column" id="content">
                <ul class="list-group" style="list-style-type:circle">
                    <li class="list-group-item list-group-item-warning">Python(Flask)</li>
                    <li class="list-group-item list-group-item-warning">Celery(Workers, beat)</li>
                    <li class="list-group-item list-group-item-warning">Java(Basics)</li>
                    <li class="list-group-item list-group-item-warning">Python(sklearn, Numpy, Pandas)</li>
                </ul>
                </div>
            </div>
            <div class="col-sm-4" style="padding-left: 2px;">
                <div class="d-flex flex-column" id="heading">
                    <h4 class="p-2"> Frontend</h4>
                </div>
                <div class="d-flex flex-column" id="content">
                <ul class="list-group" style="list-style-type:circle">
                    <li class="list-group-item list-group-item-warning">HTML5 and CSS3</li>
                    <li class="list-group-item list-group-item-warning">JavaScript(Above ES6) </li>
                    <li class="list-group-item list-group-item-warning">Vuex Store(State Management) </li>
                    <li class="list-group-item list-group-item-warning">Vue.Js(JS framework </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        <div class="col-sm-3" style="padding-left: 2px; padding-right:3px;">
            <div clas="d-flex flex-column" id="heading">
                <h4 class="p-2"><b> Other Projects </b></h4>
            </div>
            <div class="d-flex flex-column" id="content">
                <ul class="list-group" style="list-style-type:circle" id="detail">
                    <li class="list-group-item list-group-item-secondry">Kanban Application</li>
                    <li class="list-group-item list-group-item-primary">Basic Calculator</li>
                    <li class="list-group-item list-group-item-secondry">Coupons Generating System</li>
                    <li class="list-group-item list-group-item-primary">Basic Blog System</li>
                    
                </ul>
            </div>
        </div>
        </div>
        <br><br>
        <div>
            <a href="mailto:abhineetraman@gmail.com"> <img src="https://icons.iconarchive.com/icons/bootstrap/bootstrap/512/Bootstrap-envelope-icon.png" style="height: 40px; width: 50px;" /></a>
            <br>
            ©️2002-2024 Abhineet Raman
        </div>
    </div>
    `,

    data : function(){
        return{

        }
    },

    methods: {
        about : function(){
            router.push("/pinfo");
        },

        play1: function(){
            return window.location.href = "https://clipchamp.com/watch/PHpqPAfGii8?utm_source=share&utm_medium=social&utm_campaign=watch";
        },

        play2 : function(){
            return window.location.href = 'https://clipchamp.com/watch/9JqCtW4LthV';
        },

        play3 : function(){
            return window.location.href = 'https://clipchamp.com/watch/jN15QliMrtg';
        }
    }
})


const routes = [{
    path: '/',
    component: Tech
}, {
    path:'/pinfo',
    component: Info
}];

const router = new VueRouter({
    routes
})

var app = new Vue({
    el: '#app',
    router: router,
})