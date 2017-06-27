<template>
    <!-- This component is meant to show how to deal with Transitions using JS-->
    <div>
        <button class="btn btn-primary" @click="load = !load">(JS trans.) Load / Remove Element</button>
        <br>
        <br>
        <transition 
            @before-enter="beforeEnter" 
            @enter="enter" 
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled" 
            @before-leave="beforeLeave" 
            @leave="leave" 
            @after-leave="afterLeave" 
            @leave-cancelled="leaveCancelled" 
            :css="false"> <!-- When specifying this ':css="false"', it tells Vue we're not using CSS transitions, so it doesn't need to try to find classes for it. -->
            <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                load: false,
                elementWidth: 100
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            }
        }
    }
</script>
