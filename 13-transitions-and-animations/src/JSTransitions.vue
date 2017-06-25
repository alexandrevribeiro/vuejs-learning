<template>
    <!-- This component is meant to show how to deal with Transitions using JS-->
    <div>
        <button class="btn btn-primary" @click="load = !load">(JS trans.) Load / Remove Element</button>
        <br>
        <br>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled" :css="false">
            <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                load: false
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
            },
            enter(el, done) {
                console.log('enter');
                done();
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
            },
            leave(el, done) {
                console.log('leave');
                done();
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
