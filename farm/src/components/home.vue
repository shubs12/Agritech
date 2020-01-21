<template>
  <div>
        <div>
          <div class="container-fluid px-0"><div class="box1">
      <article class="main-image">
        <section>
          <h1></h1>
          <span>To forget how to dig the earth and tend the soil is to forget ourselves</span>
          <button id="btn1" class="btn btn-x1 btn-light" @click="scrollTo('find-more')">Find out more</button>
        </section>
      </article></div>
      <div class="box1">
      <article id="find-more" class="white-section">
        <b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=94" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=80" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>
      </article></div>
     <div class="box3">
       <article id="offers" class="blue-section">
        <section class="container">
          <h2>What We Offer</h2>
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0" v-for="(offer, index) in offers" :key="index">
              <div class="icon mx-auto"><i class="fas" :class="offer.icon"></i></div>
              <h4>{{ offer.title }}</h4>
            </div>
          </div>
        </section>
      </article></div>
      <article class="second-image">
        <section>
          <h2>Welcome to <i>your</i><br>next Website</h2>
          <button class="btn btn-x1 btn-dark" @click="scrollTo('recent-projects')">Recent Projects</button>
        </section>
      </article>
      <!-- <article id="recent-projects" class="white-section">
        <section class="container">
          <h1>Recent Projects</h1>
          <div class="row no-gutters">
            <div class="col-lg-6" v-for="(project, index) in recentProjects" :key="index">
              <a href="" class="portfolio-item">
                <span class="caption">
                  <span class="caption-content">
                    <h2>{{ project.title}}</h2>
                    <p class="mb-0">{{project.description}}</p>
                  </span>
                </span>
                <img class="img-fluid" :src="require('../assets/img/'+project.img)" alt="">
                </a>
            </div>
          </div>
        </section>
      </article> -->
      <!-- <article >
        <section>
           <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

     <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

       Slide with blank fluid image to maintain slide aspect ratio
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
         </section>
      </article> -->
      <article class="blue-section">
        <section>
          <button class="btn btn-x1 btn-light mr-4" @click="scrollTo('app')">Go To Top!</button>
        </section>
      </article>
      <article id="footers" class="footer">
        <section class="container">
          <div class="row">
              <div class="col-lg-3 col-md-6 mb-5 mb-lg-0" v-for="(footer, index) in footers" :key="index">
              <div class="icon mx-auto"><a href="#"><i class="fas" :class="footer.icon"></i></a></div>
              <h4>{{ footer.title }}</h4>
            </div>
          </div>
        </section>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import navbar from './navbar'
export default {
  components: {
    navbar
  },
  data: () => {
    return {
      slide: 0,
      sliding: null,
      offers: [
        {
          icon: 'fa-crop',
          title: 'Market',
          description: 'looks great on any screen size'
        },
        {
          icon: 'fa-pencil-alt',
          title: 'Services',
          description: 'looks great on any screen size'
        },
        {
          icon: 'fa-money',
          title: 'Buy & sell crops',
          description: 'looks great on any screen size'
        },
        {
          icon: 'fa-flag-checkered',
          title: 'Scheme',
          description: 'looks great on any screen size'
        }
      ],
      recentProjects: [
        {
          img: 'd.jpg',
          title: 'nature',
          description: 'looks great on any screen size'
        },
        {
          img: 'd.jpg',
          title: 'happiness',
          description: 'looks great on any screen size'
        },
        {
          img: 'd.jpg',
          title: 'c.jpg',
          description: 'looks great on any screen size'
        },
        {
          img: 'd.jpg',
          title: 'nature',
          description: 'looks great on any screen size'
        }
      ],
      footers: [
        {
          icon: 'fa fa-instagram  '
        },
        {
          icon: 'fa fa-whatsapp'
        },
        {
          icon: 'fa fa-facebook'
        },
        {
          icon: 'fa fa-twitter'
        }
      ]
    }
  },
  methods: {
    scrollTo (element) {
      const el = document.querySelector('#' + element)
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>

<style lang="css">
@import url('https://use.fontawesome.com/releases/v5.7.0/css/all.css');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
article{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}
.btn-x1{
  padding: 10px;
  font-family: sans-serif;
  font-size: 1.25rem;
}
.main-image, .second-image{
  min-height: 100vh;
  background-size: cover;
  padding: 0 10px;
  text-align: center;
  width: 100%;
}
.main-image{
  background: url('../assets/img/g.jpg') no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.second-image{
  background: url('../assets/img/c.jpg') no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.second-image h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  }

  .second-image span {
    display: block;
    padding-bottom: 30px;
    font-size: 1.6rem;
    font-weight: bold;
  }
 .main-image h1 {
  font-size: 3.2rem;
  font-weight: bold;
  }

  .main-image span {
    display: block;
    padding-bottom: 30px;
    font-size: 3rem;
    font-weight: bold;
    color: black;
  }
.white-section{
  padding: 120px 10px;
  background-color: white;
  text-align: center;
  color: black;
  background-attachment: fixed;
}

 .white-section h3 {
  font-size: 2rem;
  font-weight: bold;
  color: black;
  }
  .white-section h1 {
  font-size: 3rem;
  font-weight: bold;
  }

  .white-section span {
    display: block;
    padding-bottom: 30px;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .white-section .row {
    padding-top: 50px;
    }
  .portfolio-item {
    display: block;
    position: relative;
    overflow: hidden;
  }
  .caption {
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: transform .2s linear;
  }
  .caption-content {
    text-align: left;
    color: #ffffff;
    margin: auto 4rem 4rem;
    padding: 30px;
  }
  .white-section img{
    transition: transform .2s linear;
  }
  .white-section g:hover img{
    transform: scale(.9);
  }
  g:hover .caption{
    transform: scale(.9);
  }
  .blue-section {
    padding: 70px 10px;
    background-color: #1d809f;
    color: #ffffff;
    text-align: center;
    background-attachment: fixed;
  }

    .blue-section h2 {
    font-size: 3rem;
    font-weight: bold;
    font-style: oblique;
    margin-bottom: 50px;
    }
  .blue-section h4 {
    font-size: 1.6rem;
    padding-top: 20px;
  }
  .blue-section .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    color: #1d809f;
    border-radius: 50%;
  }
  .blue-section .icon i {
    font-size: 2.5rem;
  }
  .footer {
    padding: 70px 10px;
    color: #ffffff;
    text-align: center;
  }
  .footer {
    background: url('../assets/img/bri.jpg')
  }
  .footer .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    color: black;
    border-radius: 50%;
  }
   .footer .icon i {
    font-size: 2rem;
    }
  .footer h4 {
    font-size: 1.6rem;
    padding-top: 20px;
  }
  .box1 {
    background-attachment: fixed;
  }
   .box2 {
    background-attachment: fixed;
  }
  .a {
    padding: 5px;
    margin-left: 0px;
    margin-bottom: 15px;
  }
  .b {
    padding: 5px;
    margin-left: 0px;
    margin-bottom: 15px;
  }
  .c {
    padding: 5px;
    margin-left: 0px;
    margin-bottom: 15px;
  }
</style>
