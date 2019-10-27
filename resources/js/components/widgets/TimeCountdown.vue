<template>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, tenetur?</p>
    <div class="time-countdown">
      <flip-countdown :deadline="getDeadline"></flip-countdown>
    </div>
  </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
    components: {
        FlipCountdown
    },
    data() {
        return {
            deadline: '2019-10-28 16:33:00'
        };
    },
    computed: {
        getTimeDeadline() {
            return {
                hours: 16,
                min: 30,
                sec: 0,
                ms: 0
            };
        },
        getDeadline() {
            const cur = new Date();
            const deadline = new Date();
            const timeDeadline = this.getTimeDeadline;
            deadline.setHours(timeDeadline.hours, timeDeadline.min, timeDeadline.sec, timeDeadline.ms);
            if (cur > deadline) {
                deadline.setDate(deadline.getDate() + 1);
            } 
            return this.generateDeadlineString(deadline);
        }
    },
    methods: {
        generateDeadlineString(date) {
            const deadline = new Date(date);
            const string = `${deadline.getFullYear()}-${deadline.getMonth() + 1}-${deadline.getDate()} ${deadline.getHours()}:${deadline.getMinutes()}:${deadline.getSeconds()}`;
            return string;
        }
    },
    mounted() {
        // Hide countdown days
        const timeCountdowns = document.getElementsByClassName('flip-clock__piece');
        if (timeCountdowns.length === 4) {
            timeCountdowns[0].style.display = 'none';
        }
        
    }
};
</script>

<style>
</style>