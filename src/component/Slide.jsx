
const Slide = () => {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://www.rei.com/dam/up_2018-02-c01_2972_running_shoes_fit.jpg?t=ea16by9lg"
      className="w-full h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://runkeeper.com/cms/wp-content/uploads/sites/4/2021/12/ASICS_Color-Injection-Pack_Highlight_0253-scaled.jpg"
      className="w-full h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://media.gq.com/photos/63eba1b2275d2fef78a425c2/16:9/w_1600,c_limit/nike-running-shoes-streakfly-invincible.jpg"
      className="w-full h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://media.cnn.com/api/v1/images/stellar/prod/comfy-shoes-nike-new-lead.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
      className="w-full h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Slide