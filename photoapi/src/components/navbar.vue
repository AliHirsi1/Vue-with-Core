<template>
<div>
    <header>
        <nav>
            <div class="row">               
                <img class="logo" src="src/assets/img/logo.jpg" alt="metrophoto">
                <ul class="main-nav">
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Log in</a></li>
                     <li><a href="#">Upload</a></li>
                </ul>
            </div>
        </nav>

    </header>

</div>
    
</template>
<script>
export default {
    data(){
        return {
           

            
        }
    }
    
}
</script>
<style scoped>

.row {
    max-width: 1140px;
    margin: 0 auto;

  }

.logo{   
    height: 100px;
    width: auto;
    float: left;
    margin-top: 40px;
    border-radius: 50%;
}

.main-nav {
    float: right;
    list-style: none;
    margin-top: 70px;
    margin-left: 55%;
}

.main-nav li {
    display: inline-block;
    margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited {
    padding: 8px 0;
    text-decoration: none;  
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    font-size: 90%;
    color: #000;
}

.main-nav li a:hover,
.main-nav li a:active{
    border-bottom: 3px solid #e67e22;
}

</style>