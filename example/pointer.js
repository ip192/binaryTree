/**
 * Created by lenovo on 2018/2/26.
 */
window.addEventListener('pageshow', function(event) {
  console.log('event.persisted', event.persisted); //PageTransitionEvent
});

window.addEventListener('load', function() {
  console.log('load');
})