

Vue.component('modal', {
    props: ['body', 'title', "id"],
    data: function (){
        let t = $('.btn').data('title');
        return {
            text: t
        }
    },
    template: `
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">{{ text }}</h4>
          </div>
          <div class="modal-body">
            <p>{{ body }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        
      </div>
    </div>
    `
})

let app = new Vue({
    el: '#root',
    data: {

    },
})