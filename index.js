let dataBox = document.getElementById('data-box-container');
let image = document.getElementById('header-image');
let jobData = JSON.parse(data);
console.log(jobData)
function load() {

    //initialize block
    for (var i = 0; i < jobData.length; i++) {

        var newBlock = document.createElement('div');

        newBlock.innerHTML = `<div class="data-block"><div><img src="${jobData[i].logo}"/> <div class="data-company">${jobData[i].company}</div> <div class="data-position">${jobData[i].position}</div>
        <div class="data-postedAt">${jobData[i].postedAt} </div> <div class="data-contract">${jobData[i].contract} </div> <div class="data-location">${jobData[i].location} </div>
        <div class="data-role">${jobData[i].role} </div><div class="data-level">${jobData[i].level} </div> 
        <div class="data-new" id="data-new">
        ${jobData[i].new ? "NEW!" : ' '}
        </div> <div class="data-featured" id="data-featured"> ${jobData[i].featured ? "FEATURED" : ' '}
        </div> <div class="data-languages"> <div class="data-languages-items">${jobData[i].languages[0]}</div>
        <div class="data-languages-items">${jobData[i].languages[1] ? jobData[i].languages[1] : ' '}</div>
        <div class="data-languages-items">${jobData[i].languages[2] ? jobData[i].languages[2] : ' '}</div>
        </div> <div class="data-tools"> <div>${jobData[i].tools[0] ? jobData[i].tools[0] : ' '}</div> <div>${jobData[i].tools[1] ? jobData[i].tools[1] : ' '}</div>
        </div></div> </div>`;

        dataBox.append(newBlock)

        //use document.querySelectorAll to choose all (.data-new)
        //since document.getElementById('data-new') not applicable
        //as (.dataNew) not built yet before initialize ids

        if (!jobData[i].new) {
            document.querySelectorAll(".data-new")[i].style.visibility = 'hidden';
            document.querySelectorAll(".data-featured")[i].style.visibility = 'hidden';
            document.querySelectorAll(".data-featured")[2].style.visibility = 'hidden';

        }

        //console.log(jobData[i].languages)
        //if there is no second and third languages
        //set second and third elements' visibilities to hidden
        if (!jobData[i].languages[1] && !jobData[i].languages[2]) {
            var lan = document.querySelectorAll(".data-languages")[i];
            //console.log(lan)
            //select childNodes using childNodes
            var lanChild = lan.childNodes;
            //lanChild[1],lanChild[3], lanChild[5] = first,second third child's elements
            //console.log(lanChild[3].innerHTML)
            //document.querySelectorAll(".data-languages")[i].style.visibility = 'hidden';
            lanChild[3].style.visibility = "hidden";
            lanChild[5].style.visibility = "hidden";
        }

        //console.log(jobData[i].tools)
        //if there is one tool
        //remove the remain
        if (jobData[i].tools.length != 0 && !jobData[i].tools[1]) {
            var tools = document.querySelectorAll(".data-tools")[i];

            var toolsChild = tools.childNodes;
            //console.log(toolsChild);
            toolsChild[3].style.visibility = "hidden";

        }


    }
    //select language classes


    var dataBlock = document.getElementsByClassName('data-block');
    var languagesClass = document.getElementsByClassName('data-languages-items');
    for (let j = 0; j < languagesClass.length; j++) {
        languagesClass[j].addEventListener('click', function () {

            //console.log(languagesClass[j].parentNode.innerHTML)
            //get parentNode
            var selected = languagesClass[j].innerHTML
            //console.log(selected)

            //after select the data-languages-items
            //if the items not match the specific data-block class
            //get the specific data-block class
            //and make it invisible

            for (let k = 0; k < dataBlock.length; k++) {

                for (let l = 0; l <= 2; l++) {
                    if (selected === dataBlock[k].getElementsByClassName('data-languages-items')[l].innerText) {
                        //console.log(dataBlock[k].innerText)
                        //dataBlock[k].style.display = "none"
                        //alert(selected)
                    }
                }
            }

        })
    }

    var lanClass = document.getElementsByClassName('data-languages-items');
    var filterBlock = document.createElement('div');
    let languagesTexts = [];
    for (let l = 0; l < lanClass.length; l++) {
        
        lanClass[l].addEventListener('click', function (i) {
            let languagesText = i.target.innerHTML;
            languagesTexts.push(languagesText);
            
            for(let z = 0; z < languagesTexts.length; z++){
                console.log(languagesTexts);
            }

            filterBlock.innerHTML = `<div class="filter-block"><div class="languages-block"><div>${languagesTexts}</div></div><button id="clear">Clear</button></div>`
            //must place document.getElementById("clear") inside function
            //after click then only append clear
            var clear = document.getElementById("clear");
            var languagesBlock = document.getElementsByClassName('languages-block');
            //console.log(languagesBlock[0].innerText);
            clear.addEventListener("click", function () {
                alert('Clear!');
                languagesBlock[0].style.display = 'none'
            })
        })
        
       
    }
    dataBox.append(filterBlock);

    //clear
    //alternatives
    // document.addEventListener('click', function(e){
    //     if(e.target.tagName =="BUTTON"){
    //      alert('Clear!');
    //      languagesBlock[0].style.display = 'none'
    //     }
    //   })

    //toolsClass
    var toolsClass = document.getElementsByClassName('data-tools');
    var toolsBlock = document.createElement('div');
    let selectedArr = [];
    for (let m = 0; m < toolsClass.length; m++) {
        for (let p = 0; p < 2; p++) {
            toolsClass[m].children[p].addEventListener('click', function (i) {
            
                let selected = i.target.innerHTML;
                selectedArr.push(selected);

                for(let y = 0; y < selectedArr.length; y++){
                    console.log(selectedArr);
                }
                toolsBlock.innerHTML = `<div class="tools-block"><div>${selectedArr}</div><button id="clear">Clear</button></div>`
                //console.log(toolsClass[m].children[p].innerText)
                var clear = document.getElementById("clear");
                var tools = document.getElementsByClassName('tools-block');

                clear.addEventListener("click", function () {
                    //alert('Clear!');
                    tools[0].style.display = 'none'
                    tools[1].style.display = 'none'
                })
            })

        }
    }

    dataBox.append(toolsBlock)


}
