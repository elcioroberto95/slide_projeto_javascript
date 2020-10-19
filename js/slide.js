export default class Slide 
{
        constructor(slide,wrapper)
    {
        this.slide = document.querySelector(slide);
        this.wrapper = document.querySelector(wrapper);
     }
        onStart(event) 
        {

            event.preventDefault();

        }
        onMove(event)
        {

        }
        onEnd()
        {
            this.wrapper.removeEventListener('mousemove',this.onMove);
        }

        addSlideEvents()
        {

            this.wrapper.addEventListener('mousedown',this.onStart);
            this.wrapper.addEventListener('mousemove',this.onMove); 
            this.wrapper.addEventListener('mousemove',this.onEnd);
        }
        bindEvents()
        {
            this.onStart  = this.onStart.bind(this);
            this.onMove = this.onMove.bind(this);
        }
        init() 
        {
            this.bindEvents();
            this.addSlideEvents();
            return this;
        }

}