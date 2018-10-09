// insert a header


let headerNavItemOne = document.createElement('div');
headerNavItemOne.className = "header-nav-item";
headerNavItemOne.innerHTML = "Home";


let headerNavItemTwo = document.createElement('div');
headerNavItemTwo.className = "header-nav-item";
headerNavItemTwo.innerHTML = "Categories";


let headerTitle = document.createElement('h1');
headerTitle.className = "header-title";
headerTitle.innerText = "HighOnCoding";


let headerNav = document.createElement('nav');
headerNav.className = "header-nav-bar";
headerNav.appendChild(headerNavItemOne);
headerNav.appendChild(headerNavItemTwo);


let header = document.createElement('header');
header.className = "header";
header.appendChild(headerTitle);
header.appendChild(headerNav);



// insert a jumbotron


let jumbotronTitle = document.createElement('h2');
jumbotronTitle.className = "jumbotron-title";
jumbotronTitle.innerHTML = "Curse of the Current Reviews";


let jumbotronDescription = document.createElement('p');
jumbotronDescription.className = "jumbotron-description";
jumbotronDescription.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.";


let jumbotron = document.createElement('jumbotron');
jumbotron.className = "jumbotron-container";
jumbotron.appendChild(jumbotronTitle);
jumbotron.appendChild(jumbotronDescription);



// insert comments


let commentLikesOne = document.createElement('div');
commentLikesOne.className = "comment-bar-item";
commentLikesOne.innerHTML = "# Likes";


let commentLikesTwo = document.createElement('div');
commentLikesTwo.className = "comment-bar-item";
commentLikesTwo.innerHTML = "";


let commentCommentsOne = document.createElement('div');
commentCommentsOne.className = "comment-bar-item";
commentCommentsOne.innerHTML = "# comments";


let commentCommentsTwo = document.createElement('div');
commentCommentsTwo.className = "comment-bar-item";
commentCommentsTwo.innerHTML = "";


let commentBarOne = document.createElement('div');
commentBarOne.className = "comment-bar";
commentBarOne.appendChild(commentCommentsOne);
commentBarOne.appendChild(commentLikesOne);


let commentBarTwo = document.createElement('div');
commentBarTwo.className = "comment-bar";
commentBarTwo.appendChild(commentCommentsTwo);
commentBarTwo.appendChild(commentLikesTwo);


let commentTitleOne = document.createElement('h3');
commentTitleOne.className = "comment-title";
commentTitleOne.innerHTML = "Hello WatchKit";


let commentTitleTwo = document.createElement('h3');
commentTitleTwo.className = "comment-title";
commentTitleTwo.innerHTML = "";


let commentDescriptonOne = document.createElement('p');
commentDescriptonOne.className = "comment-description";
commentDescriptonOne.innerHTML = "framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";


let commentDescriptonTwo = document.createElement('p');
commentDescriptonTwo.className = "comment-description";
commentDescriptonTwo.innerHTML = "";


let commentDivOne = document.createElement('div');
commentDivOne.className = "comment-div";
commentDivOne.appendChild(commentTitleOne);
commentDivOne.appendChild(commentDescriptonOne);
commentDivOne.appendChild(commentBarOne);


let commentDivTwo = document.createElement('div');
commentDivTwo.className = "comment-div";
commentDivOne.appendChild(commentTitleTwo);
commentDivOne.appendChild(commentDescriptonTwo);
commentDivOne.appendChild(commentBarTwo);


let commentContainer = document.createElement('section');
commentContainer.className = "comment-container";
commentContainer.appendChild(commentDivOne);
commentContainer.appendChild(commentDivTwo);



// functions that call all of the objects
const makeHeader = () => {
    document.body.appendChild(header);
}

const makeJumbotron = () => {
    document.body.appendChild(jumbotron);
}

const makeComment = () => {
    document.body.appendChild(commentContainer);
}

console.log(makeHeader());
window.onload = makeHeader();
window.onload = makeJumbotron();
window.onload = makeComment();
