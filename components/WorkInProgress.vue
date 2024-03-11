<template>
  <div class="bg-red-50">
    <div class="">
      <div class="main-title">
        <h1>Website</h1>
        <h2>under construction</h2>
      </div>
    </div>
    <div class="">
      <div class="svg-img">
        <BgSvg />
      </div>
    </div>
    
  </div>
  <footer class="footer">
    <div class="">
      <span>&copy; {{ websiteName }}</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { websites } = useRuntimeConfig().public as { websites: Record<string, string> };
const { hostname } = useRequestURL();
const websiteName = websites[hostname];

useHead({
  title: `${websiteName} | Website under construction`,
  meta: [
    {
      name: 'description',
      content: 'Website under construction'
    }
  ]
});
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%; /* 1rem = 10px */
}

body{
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #777;
  
}

.main-title{
  text-align: center;
  margin-top: 44rem;
  margin-bottom: 8rem;
  text-shadow: 
  1px 0px 1px #ccc, 0px 1px 1px #eee, 
  2px 1px 1px #ccc, 1px 2px 1px #eee,
  3px 2px 1px #ccc, 2px 3px 1px #eee,
  4px 3px 1px #ccc, 3px 4px 1px #eee,
  5px 4px 1px #ccc, 4px 5px 1px #eee,
  6px 5px 1px #ccc, 5px 6px 1px #eee,
  7px 6px 1px #ccc;
}

.main-title h1{
  font-size: 7rem;
  text-transform: uppercase;
  font-weight: 800;
  color: #555;
}

.main-title h2{
  font-size: 4rem;
  font-weight: 300;
  text-transform: uppercase;
}

.svg-img{
  display: block;
  margin: auto;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
  line-height: 35px;
  background-color: #f5f5f5;
  font-size: 1.3rem;
}

/* Media Queries */
@media (min-width: 640px){
  .main-title h1{
      font-size: 5rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #555;
  }
  .main-title h2{
      font-size: 3rem;
      font-weight: 300;
      text-transform: uppercase;
  }
}

@media (min-width: 768px){
    .main-title h1{
        font-size: 6rem;
        text-transform: uppercase;
        font-weight: 800;
        color: #555;
    }
    .main-title h2{
        font-size: 4rem;
        font-weight: 300;
        text-transform: uppercase;
    }
}

@media (min-width: 1024px){
    .main-title h1{
        font-size: 7rem;
        text-transform: uppercase;
        font-weight: 900;
        color: #555;
    }
    .main-title h2{
        font-size: 5rem;
        font-weight: 300;
        text-transform: uppercase;
    }
}
  
@media (min-width: 1200px){
  .main-title h1{
      font-size: 8rem;
      text-transform: uppercase;
      font-weight: 900;
      color: #555;
  }
  .main-title h2{
      font-size: 5rem;
      font-weight: 300;
      text-transform: uppercase;
  }
  .main-title{
      text-align: center;
      margin-top: 4rem;
      margin-bottom: 4rem;
  }
}
</style>
