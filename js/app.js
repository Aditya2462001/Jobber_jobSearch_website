pageup = document.getElementById('scrolltopbtn');
window.onscroll = function ()
 {
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop == 400 || document.documentElement.scrollTop > 400)
     {
        pageup.classList.remove('displayProp');
        // console.log("hello");
    }
    else 
    {
        pageup.classList.add('displayProp');
        // console.log("byyy");
    }
};
// console.log("Hello world");

const pagedownBtn = document.querySelector('.scroll_down_btn');

pagedownBtn.addEventListener("click",function()
{
//   console.log("hello");
  window.scroll({
      top:600,
      left:0,
      behaviour:'smooth'
  });

});
pageup.addEventListener("click",function ()
{
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    });
})
const job_offer_list = [
    {
        id:1,
        job_title:"Web Developement",
        company_name:"MindFrame",
        logo_img:"./images/comapny_logo/web_2.jpg",
        location:'Mumbai',
    },
    {
        id:2,
        job_title:"Android Developement",
        company_name:"Innovins",
        logo_img:"./images/comapny_logo/android_3.png",
        location:'hyedrabad',
    },
    {
        id:3,
        job_title:"Video Editing",
        company_name:"webDew",
        logo_img:"./images/comapny_logo/video_3.svg",
        location:'Gondia',
    },
    {
        id:4,
        job_title:"Web Developement",
        company_name:"Locada",
        logo_img:"./images/comapny_logo/web_1.jpg",
        location:'Nagpur',
    },
    {
        id:5,
        job_title:"Content Writer",
        company_name:"mwm",
        logo_img:"./images/comapny_logo/writer_1.png",
        location:'pune',
    },
    {
        id:6,
        job_title:"Web Developement",
        company_name:"Unicoconnect",
        logo_img:"./images/comapny_logo/web_4.png",
        location:'Gondia',
    },
    {
        id:7,
        job_title:"Front-end Dev",
        company_name:"7 Edege",
        logo_img:"./images/comapny_logo/front_1.png",
        location:'Gondia',
    },
    {
        id:8,
        job_title:"Backend Dev",
        company_name:"Space India",
        logo_img:"./images/comapny_logo/back_1.png",
        location:'Mumbai',
    },
    {
        id:9,
        job_title:"Android Developement",
        company_name:"MotionGility",
        logo_img:"./images/comapny_logo/video_2.png",
        location:'Delhi',
    },
];


const allBtn_cata = document.querySelectorAll(".btn");
const card_conatiner = document.querySelector('#card_container');
let coll = "";
job_offer_list.map(function(element)
{
    const p = ` <div class="col">
                <div class="card h-100 text-center">
                  <div class="container d-flex justify-content-center" 
                   style="width: 100%;height: 200px;border-bottom:1px solid gray;background:rgba(223, 223, 223, 0.597);">
                    <a href="#"> <img src="${element.logo_img}" class="card-img-top h-50 w-50 mt-5" alt="..."></a>
                  </div>
                  <div class="card-body">
                        <a href="#">
                        <h5 class="card-title">${element.job_title}</h5>
                        </a>
                        <a href="#">
                            <h6 class="card-title">${element.company_name}</h6>
                        </a>
                        <a href="#">
                            <p class="card-text">${element.location}</p>
                        </a>
                    </div>
                </div>
            </div>`;
    coll += p;
});
card_conatiner.innerHTML = coll;
coll = "" ;

allBtn_cata.forEach( function (event)
{
    event.addEventListener("click",function()
    {
        // window.alert(event.value);
        console.log(event.value);
        job_offer_list.map(function(element)
        {
            if(event.value == "All")
            {
                // console.log(element);
                const p = ` <div class="col">
                <div class="card h-100 text-center">
                  <div class="container d-flex justify-content-center" 
                   style="width: 100%;height: 200px;border-bottom:1px solid gray;background:rgba(223, 223, 223, 0.897);">
                   <a href="#"><img src="${element.logo_img}" class="card-img-top h-50 w-50 mt-5" alt="..."></a>
                  </div>
                 <div class="card-body">
                        <a href="#">
                        <h5 class="card-title">${element.job_title}</h5>
                        </a>
                        <a href="#">
                            <h6 class="card-title">${element.company_name}</h6>
                        </a>
                        <a href="#">
                            <p class="card-text">${element.location}</p>
                        </a>
                    </div>
                </div>
            </div>`;
             coll += p ;
            }
            else
            {
            if (element.job_title == event.value)
            {
                // console.log(element);
                const p = ` <div class="col">
                <div class="card h-100 text-center">
                  <div class="container d-flex justify-content-center" 
                   style="width: 100%;height: 200px;border-bottom:1px solid gray;background:rgba(223, 223, 223, 0.897);">
                   <a href="#"> <img src="${element.logo_img}" class="card-img-top h-80 w-80 mt-5" alt="..."
                    style="width:150px;height:100px;"></a>
                  </div>
                    <div class="card-body">
                    <a href="#">
                    <h5 class="card-title">${element.job_title}</h5>
                    </a>
                    <a href="#">
                        <h6 class="card-title">${element.company_name}</h6>
                    </a>
                    <a href="#">
                        <p class="card-text">${element.location}</p>
                    </a>
                    </div>
                </div>
            </div>`;
                coll += p;
            }
            }
        })
        console.log(coll);
        card_conatiner.innerHTML = coll;
        coll = "";

    });

});

