<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <label>Animation for the first info:</label>
                <select v-model="firstAlertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show </button>
                <br><br>
                <transition :name="firstAlertAnimation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <!-- "transition" works with the two possible CSS properties:
                "animation" and "transition". By default Vue.js the one that has the
                longest duration, but it can be overwritten through "type" attr.
                 -->
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                
                <!-- "appear" attr makes the transition be also applied when loaded-->
                <transition name="fade" appear>
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>

                <hr>
                <button class="btn btn-primary" @click="anotherShow = !anotherShow">Show</button>
                <br><br>
                <!--Using different class names-->
                <transition 
                    enter-active-class="animated zoomIn"
                    leave-active-class="animated zoomOut">
                    <div class="alert alert-info" v-if="anotherShow">This is some Info</div>
                </transition>

                <hr>
                <button class="btn btn-primary" @click="showMultiple = !showMultiple">Show</button>
                <br><br>
                <!--Transitioning between Multiple Elements-->
                 <transition name="fade" mode="out-in">
                    <div class="alert alert-info" v-if="showMultiple" key="info">-> This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">-> This is some Warning</div>
                </transition>

                <hr>
                <h4>JavaScript transitions</h4>
                <js-transitions></js-transitions>
            </div>
        </div>
    </div>
</template>

<script>
    import JSTransitions from './JSTransitions.vue';

    export default {
        data() {
            return {
                show: true,
                anotherShow: false,
                showMultiple: true,
                firstAlertAnimation: 'fade'
            }
        },
        components: {
            jsTransitions: JSTransitions
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {
        /* Default -> opacity: 1; */
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter { 
        /*transform: translateY(20px);*/
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave { /* It's not necessary because the @keyFrame */ }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        /* As below the transition is bigger than the animation, it's necessary
           to tell "<transition>" (through "type") which one should be the last */
        /*transition: opacity 3s;*/
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

     @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
