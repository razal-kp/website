fetch('assets/json/data.json')
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
      data=item
      document.getElementById('video_card').innerHTML += `
      <div class="games-item mobile">
                                <div class="games-single-item img-contain-isotope">
                                    <div class="games-thumb">
                                        <div class="games-thumb-image">
                                            <a href="#">
                                                <img src="https://i.ytimg.com/vi/${data.guid}/hqdefault.jpg" alt="games" />
                                            </a>
                                        </div>
                                        <div class="game-overlay">
                                            <a class="popup-youtube" href="${data.url}">
                                                <i class="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="games-desc">
                                        <h3><a href="#">${data.title}</a></h3>
                                        <p class="game-meta">Author: ${data.author.name}</p>
                                        <p class="game-meta">Release date:<span> ${data.date_published}</span></p>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!-- end game item -->`;
    })
})