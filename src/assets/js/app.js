var num=1;
function previous() {
    
    var slider= new Array;
    slider[0] =[
        "images/slider1.webp",
        'images/slider1_slide2_01.png',
        'images/slider1_slide3_01.png'
    ];
    slider[1] =[
        "Swedish",
        "Luxury",
        "Designer"
    ];
    slider[2]=[
        "Design",
        "brands",
        "Watches"
    ];
    
    document.getElementById('imgs').src=slider[0][num];
    document.getElementById('text1').innerText=slider[1][num];
    document.getElementById('text2').innerText=slider[2][num];
    num++; 
    if(num==3){
        num=0;
    }
    console.log(num);
}

function ck(tg){
    if(tg==''){
        tg=='des';
    }
    // document.getElementById(tg).style=`display:block;`;
    console.log(tg);
    if(tg=='des'){
        document.getElementById('element3-product').innerHTML=`
        <div id="des">
                    <p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum provident illum. Animi, consequuntur facere. Ducimus perferendis illum voluptas. Quidem corporis repellendus tempore doloribus laboriosam pariatur molestiae reiciendis commodi esse.</p>
                </div>
        `;
    }else if(tg=='add'){
        document.getElementById('element3-product').innerHTML=`
        <div id="add">
                    <div>
                        <h1>Additional information</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Water Resistance</th>
                                    <td><i>High</i></td>
                                </tr>
                                <tr>
                                    <th>Band Color</th>
                                    <td><i>Brown</i></td>
                                </tr>
                                <tr>
                                    <th>Band Material</th>
                                    <td><i>Leather</i></td>
                                </tr>
                                <tr>
                                    <th>Watch Movement Type</th>
                                    <td><i>Quartz</i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div >
        `;
    }else if(tg=='reviews'){
        document.getElementById('element3-product').innerHTML=`
        <div id="reviews">
                    <div>
                        <h1>Reviews</h1>
                        <p>There are no reviews yet.</p>
                    </div>
                    <div>
                        <h2>Be the first to review “White Gold Ring in Topaz and Diamonds”</h2>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <div>
                            <form action="#" method="get">
                                <div>
                                    <label for="name">Name *</label>
                                    <input type="text" id="name">
                                </div>
                                <div>
                                    <label for="email">Email *</label>
                                    <input type="text" id="email">
                                </div>
                                <div>
                                    <label for="rating">Your rating *</label>
                                    <span>sao</span>
                                </div>
                                <div>
                                    <label for="Review">Review *</label>
                                    <textarea name="review" id="review" cols="30" rows="10"></textarea>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="box" id="box">
                                    <p>By using this form you agree with the storage and handling of your data by this website. *</p>
                                </div>
                                <button type="submit">submit</button>
                            </form>
                        </div>
                    </div>
                </div>
        `;
    }
}

ck(tg);
