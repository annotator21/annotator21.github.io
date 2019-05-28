
 var firebaseConfig = {
    apiKey: "AIzaSyAyD0wiyVuSAU0REtysIqCHo6281sgAKRk",
    authDomain: "annotatorclaimpremises.firebaseapp.com",
    databaseURL: "https://annotatorclaimpremises.firebaseio.com",
    projectId: "annotatorclaimpremises",
    storageBucket: "annotatorclaimpremises.appspot.com",
    messagingSenderId: "424112928886",
    appId: "1:424112928886:web:a12d7457c48e8716"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var complete = new Complete ();
var Len_max1=data1.phrases.length,Len_max2=data2.phrases.length,Len_max3=data3.phrases.length,count1=0,count2=0,count3=0;
var claim_text1_1,claim_text1_2,claim_text2_1,claim_text2_2,claim_text3_1,claim_text3_2;
var select1_1,select1_2,select2_1,select2_2,select3_1,select3_2;

var premise_text1_1,premise_text1_2,premise_text2_1,premise_text2_2,premise_text3_1,premise_text3_2;
var prem_select1_1,prem_select1_2,prem_select2_1,prem_select2_2,prem_select3_1,prem_select3_2;
var premise_list1_1=new Array();
var premise_list1_2=new Array();
var premise_list2_1=new Array();
var premise_list2_2=new Array();
var premise_list3_1=new Array();
var premise_list3_2=new Array();


window.onload=function(){
	/*
	document.getElementById('contactForm').getElementById("submit").onclick=submitForm;
	document.getElementById('contactForm2').getElementById("submit2").onclick=submitForm2;
	document.getElementById('contactForm3').getElementById("submit3").onclick=submitForm3;
*/
	/*
document.getElementById('submit').onclick=submitForm;
 document.getElementById('contactForm').addEventListener('submit',submitForm);
document.getElementById('submit2').onclick=submitForm2;
document.getElementById('contactForm2').addEventListener('submit',submitForm2);
document.getElementById('submit3').onclick=submitForm3;

document.getElementById('contactForm3').addEventListener('submit',submitForm3);

*/
function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}
function loopSelected(id) {
    var selectedArray = new Array();
    var selObj = id; 
    var i;
    for (i=0; i<selObj.options.length; i++) { 
        
            selectedArray[i] = selObj.options[i].value;
    } 
return selectedArray;
}

document.getElementById('next').addEventListener("click", nextComment);
document.getElementById('next2').addEventListener("click", nextComment2);
document.getElementById('next3').addEventListener("click", nextComment3);
document.getElementById('Page1b').addEventListener("click", toComment);
document.getElementById('Page2b').addEventListener("click", toComment2);
document.getElementById('Page3b').addEventListener("click", toComment3);
	
document.getElementById('Claim1.1').addEventListener("click",claim1_1);	
document.getElementById('Claim1.2').addEventListener("click",claim1_2);	
document.getElementById('Claim2.1').addEventListener("click",claim2_1);	
document.getElementById('Claim2.2').addEventListener("click",claim2_2);	
document.getElementById('Claim3.1').addEventListener("click",claim3_1);	
document.getElementById('Claim3.2').addEventListener("click",claim3_2);	

document.getElementById('Comment1').addEventListener('mouseup', function (e) {
e.preventDefault();
  claim_text1_1 = this.value.substring(this.selectionStart, this.selectionEnd);
  premise_text1_1 = this.value.substring(this.selectionStart, this.selectionEnd);

});
document.getElementById('Comment2').addEventListener('mouseup', function (e) {
e.preventDefault();
  claim_text1_2 = this.value.substring(this.selectionStart, this.selectionEnd);
  premise_text1_2 = this.value.substring(this.selectionStart, this.selectionEnd);
});
document.getElementById('Comment1.2').addEventListener('mouseup', function (e) {
e.preventDefault();
  claim_text2_1 = this.value.substring(this.selectionStart, this.selectionEnd);
  premise_text2_1 = this.value.substring(this.selectionStart, this.selectionEnd);
});
document.getElementById('Comment2.2').addEventListener('mouseup', function (e) {
e.preventDefault();
  claim_text2_2 = this.value.substring(this.selectionStart, this.selectionEnd);
  premise_text2_2 = this.value.substring(this.selectionStart, this.selectionEnd);
});
document.getElementById('Comment1.3').addEventListener('mouseup', function (e) {
 e.preventDefault();
 claim_text3_1 = this.value.substring(this.selectionStart, this.selectionEnd);
 premise_text3_1 = this.value.substring(this.selectionStart, this.selectionEnd);
});
document.getElementById('Comment2.3').addEventListener('mouseup', function (e) {
  e.preventDefault();
  claim_text3_2 = this.value.substring(this.selectionStart, this.selectionEnd);
  premise_text3_2 = this.value.substring(this.selectionStart, this.selectionEnd);
});

function claim1_1(e){
e.preventDefault();
select1_1 = document.getElementById("Discourse1.1");
if(select1_1!=null && prem_select1_1!=null){
premise_list1_1.push(loopSelected(prem_select1_1));
removeOptions(prem_select1_1);	
}	
select1_1.options[select1_1.options.length] =new Option(select1_1.options.length.toString()+" "+claim_text1_1,select1_1.options.length.toString()+" "+claim_text1_1);
}
function claim2_1(e){
e.preventDefault();
select2_1 = document.getElementById("Discourse2.1");
if(select2_1!=null && prem_select2_1!=null){
premise_list2_1.push(loopSelected(prem_select2_1));
removeOptions(prem_select2_1);	
}
select2_1.options[select2_1.options.length] = new Option(select2_1.options.length.toString()+" "+claim_text2_1, select2_1.options.length.toString()+" "+claim_text2_1);
}
function claim3_1(e){
e.preventDefault();
select3_1 = document.getElementById("Discourse3.1");
if(select3_1!=null && prem_select3_1!=null){
premise_list3_1.push(loopSelected(prem_select3_1));
removeOptions(prem_select3_1);	
}

select3_1.options[select3_1.options.length] = new Option(select3_1.options.length.toString()+" "+claim_text3_1, select3_1.options.length.toString()+" "+claim_text3_1);
}
function claim1_2(e){
e.preventDefault();
select1_2= document.getElementById("Discourse1.2");
if(select1_2!=null && prem_select1_2!=null){
premise_list1_2.push(loopSelected(prem_select1_2));
removeOptions(prem_select1_2);	
}

select1_2.options[select1_2.options.length] = new Option(select1_2.options.length.toString()+" "+claim_text1_2, select1_2.options.length.toString()+" "+claim_text1_2);
}
function claim2_2(e){
e.preventDefault();
select2_2 = document.getElementById("Discourse2.2");
if(select2_2!=null && prem_select2_2!=null){
premise_list2_2.push(loopSelected(prem_select2_2));
removeOptions(prem_select2_2);	
}

select2_2.options[select2_2.options.length] = new Option(select2_2.options.length.toString()+" "+claim_text2_2,select2_2.options.length.toString()+" "+ claim_text2_2);
}
function claim3_2(e){
e.preventDefault();
select3_2 = document.getElementById("Discourse3.2");
if(select3_2!=null && prem_select3_2!=null){
premise_list3_2.push(loopSelected(prem_select3_2));
removeOptions(prem_select3_2);	
}

select3_2.options[select3_2.options.length] = new Option(select3_2.options.length.toString()+" "+claim_text3_2, select3_2.options.length.toString()+" "+claim_text3_2);
}
	
document.getElementById('Premise1.1').addEventListener("click",premise1_1);	
document.getElementById('Premise1.2').addEventListener("click",premise1_2);	
document.getElementById('Premise2.1').addEventListener("click",premise2_1);	
document.getElementById('Premise2.2').addEventListener("click",premise2_2);	
document.getElementById('Premise3.1').addEventListener("click",premise3_1);	
document.getElementById('Premise3.2').addEventListener("click",premise3_2);	



function premise1_1(e){
e.preventDefault();
prem_select1_1 = document.getElementById("Prim1.1");
if(prem_select1_1!=null)
prem_select1_1.options[prem_select1_1.options.length] =new Option(prem_select1_1.options.length.toString()+" "+premise_text1_1,prem_select1_1.options.length.toString()+" "+premise_text1_1);
}
function premise2_1(e){
e.preventDefault();
prem_select2_1 = document.getElementById("Prim2.1");
if(prem_select2_1!=null)
prem_select2_1.options[prem_select2_1.options.length] = new Option(prem_select2_1.options.length.toString()+" "+premise_text2_1, prem_select2_1.options.length.toString()+" "+premise_text2_1);
}
function premise3_1(e){
e.preventDefault();
prem_select3_1 = document.getElementById("Prim3.1");
if(prem_select3_1!=null)
prem_select3_1.options[prem_select3_1.options.length] = new Option(prem_select3_1.options.length.toString()+" "+premise_text3_1, prem_select3_1.options.length.toString()+" "+premise_text3_1);
}
function premise1_2(e){
e.preventDefault();
prem_select1_2= document.getElementById("Prim1.2");
if(prem_select1_2!=null)
prem_select1_2.options[prem_select1_2.options.length] = new Option(prem_select1_2.options.length.toString()+" "+premise_text1_2, prem_select1_2.options.length.toString()+" "+premise_text1_2);
}
function premise2_2(e){
e.preventDefault();
prem_select2_2 = document.getElementById("Prim2.2");
if(prem_select2_2!=null)
prem_select2_2.options[prem_select2_2.options.length] = new Option(prem_select2_2.options.length.toString()+" "+premise_text2_2,prem_select2_2.options.length.toString()+" "+ premise_text2_2);
}
function premise3_2(e){
e.preventDefault();
prem_select3_2 = document.getElementById("Prim3.2");
if(prem_select3_2!=null)
prem_select3_2.options[prem_select3_2.options.length] = new Option(prem_select3_2.options.length.toString()+" "+premise_text3_2, prem_select3_2.options.length.toString()+" "+premise_text3_2);
}


function drawData1() {
count1=count1+1;
var data=data1;
var counter1=document.getElementById('Count1');
var output1=document.getElementById('Comment1');
var output2=document.getElementById('Comment2');
 output1.innerHTML=data.phrases[complete.get_level1()].body;
 output2.innerHTML=data.phrases[complete.get_level1()+1].body;
 counter1.innerHTML=count1;
}

function drawData2() {
count2=count2+1;
var data=data2;
var counter2=document.getElementById('Count2');
counter2.innerHTML=count2;
var output1=document.getElementById('Comment1.2');
var output2=document.getElementById('Comment2.2');
 output1.innerHTML=data.phrases[complete.get_level2()].body;
 output2.innerHTML=data.phrases[complete.get_level2()+1].body;
}

function drawData3() {
count3=count3+1;
var data=data3;
var counter3=document.getElementById('Count3');
counter3.innerHTML=count3;
var output1=document.getElementById('Comment1.3');
var output2=document.getElementById('Comment2.3');
 output1.innerHTML=data.phrases[complete.get_level3()].body;
 output2.innerHTML=data.phrases[complete.get_level3()+1].body;
 }

 document.getElementById('submit').onclick=submitForm;
document.getElementById('submit2').onclick=submitForm2;
document.getElementById('submit3').onclick=submitForm3;
//document.getElementById('submit').onclick=Id_allot;
//document.getElementById('submit2').onclick=Id_allot2;
//document.getElementById('submit3').onclick=Id_allot3;

drawData1();
drawData2();
drawData3();
function nextComment(e){
e.preventDefault();
if(complete.get_level1()<Len_max1-1){
complete.set_level1(complete.get_level1()+2);
console.log(complete.get_level1());
drawData1();
}
} 
function nextComment2(e){
e.preventDefault();
if(complete.get_level2()<Len_max2-1){
complete.set_level2(complete.get_level2()+2);
console.log(complete.get_level1());
drawData2();
}
} 
function nextComment3(e){
e.preventDefault();
if(complete.get_level3()<Len_max3-1){
complete.set_level3(complete.get_level3()+2);
console.log(complete.get_level3());
drawData3();
}
}

function toComment(e){
e.preventDefault();
var pa1=parseInt(document.getElementById('Page1').value,10);
console.log(pa1);
complete.set_level1(pa1-1);
drawData1();
} 
function toComment2(e){
e.preventDefault();
var pa2=parseInt(document.getElementById('Page2').value,10);
complete.set_level2(pa2-1);
drawData2();
} 
function toComment3(e){
e.preventDefault();
var pa3=parseInt(document.getElementById('Page3').value,10);
complete.set_level3(pa3-1);
drawData3();
} 
	

/*

output.innerHTML=Content.FirstName+' '+Content.LastName;*/


}



//Submit form
function submitForm(e){
 e.preventDefault();
function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}
//var messagesRef=firebase.database().ref('Annotations');

var Comment1=data1.phrases[complete.get_level1()].id;
var Comment2=data1.phrases[complete.get_level1()+1].id;
if(prem_select1_1!=null)
premise_list1_1.push(loopSelected(prem_select1_1));
if(prem_select1_2!=null)
premise_list1_2.push(loopSelected(prem_select1_2));
var Discourse1=loopSelected(select1_1);
var Discourse2=loopSelected(select1_2); 
var Premise1=premise_list1_1;
var Premise2=premise_list1_2;
var Relation=submit_rel1;
var Response=document.getElementById("Resp1").value;
function loopSelected(id) {
    var selectedArray = new Array();
    var selObj = id; 
    var i;
	if(selObj!=null){
    for (i=0; i<selObj.options.length; i++) { 
        
            selectedArray[i] = selObj.options[i].value;
    } }
return selectedArray;
}
//loopSelected();
//Save message
saveMessage(Comment1,Comment2,Discourse1,Discourse2,Premise1,Premise2,Relation,Response);

//Show alert
document.querySelector('.alert').style.display='block';

//Hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display='none';
},3000);

//Clear form
document.getElementById('contactForm').reset();
if(select1_1!=null)
removeOptions(select1_1);
if(select1_2!=null)
removeOptions(select1_2);
if(prem_select1_1!=null)
removeOptions(prem_select1_1);
if(prem_select1_2!=null)
removeOptions(prem_select1_2);
premise_list1_1.length=0;
premise_list1_2.length=0;
submit_rel1.length=0;
 }
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

 
//Save message to firebase
function saveMessage(Comment1,Comment2,Discourse1,Discourse2,Premise1,Premise2,Relation,Response){
	var newMessageRef=firebase.database().ref('Annotations').push();
	newMessageRef.set({
		Comment1: Comment1,
		Comment2: Comment2,
		Claim1: Discourse1,
		Claim2: Discourse2,
		Premise1: Premise1,
		Premise2: Premise2,
		Relation: Relation,
		Response: Response
	});
}

function submitForm2(e){
 e.preventDefault();
function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}
	//var messagesRef2=firebase.database().ref('Annotations2');
var Comment1=data2.phrases[complete.get_level2()].id;
var Comment2=data2.phrases[complete.get_level2()+1].id;
if(prem_select2_1!=null)
premise_list2_1.push(loopSelected(prem_select2_1));
if(prem_select2_2!=null)
premise_list2_2.push(loopSelected(prem_select2_2));
var Discourse1=loopSelected(select2_1);
var Discourse2=loopSelected(select2_2); 
var Premise1=premise_list2_1;
var Premise2=premise_list2_2;
var Relation=submit_rel2;
var Response=document.getElementById("Resp2").value;
	
function loopSelected(id) {
    var selectedArray = new Array();
    var selObj = id; 
    var i;
if(selObj!=null){
    for (i=0; i<selObj.options.length; i++) { 
        
            selectedArray[i] = selObj.options[i].value;
    } }
return selectedArray;
}
//loopSelected();
//Save message
saveMessage2(Comment1,Comment2,Discourse1,Discourse2,Premise1,Premise2,Relation,Response);

//Show alert
document.querySelector('.alert').style.display='block';

//Hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display='none';
},3000);

//Clear form
document.getElementById('contactForm2').reset();
if(select2_1!=null)
removeOptions(select2_1);
if(select2_2!=null)
removeOptions(select2_2);
if(prem_select2_1!=null)
removeOptions(prem_select2_1);
if(prem_select2_2!=null)
removeOptions(prem_select2_2);
premise_list2_1.length=0;
premise_list2_2.length=0;
submit_rel2.length=0;
 }
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

 
//Save message to firebase
function saveMessage2(Comment1,Comment2,Discourse1,Discourse2,Premise1,Premise2,Relation,Response){
	var newMessageRef2=firebase.database().ref('Annotations2').push();
	newMessageRef2.set({
		Comment1: Comment1,
		Comment2: Comment2,
		Claim1: Discourse1,
		Claim2: Discourse2,
		Premise1: Premise1,
		Premise2: Premise2,
		Relation: Relation,
		Response: Response
	});
}

function submitForm3(e){
e.preventDefault();
	function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}
	//var messagesRef3=firebase.database().ref('Annotations3');

var Comment1=data3.phrases[complete.get_level3()].id;
var Comment2=data3.phrases[complete.get_level3()+1].id;
if(prem_select3_1!=null)
premise_list3_1.push(loopSelected(prem_select3_1));
if(prem_select3_2!=null)
premise_list3_2.push(loopSelected(prem_select3_2));
var Discourse1=loopSelected(select3_1);
var Discourse2=loopSelected(select3_2); 
var Premise1=premise_list3_1;
var Premise2=premise_list3_2;
var Relation=submit_rel3;
var Response=document.getElementById("Resp3").value;
	
function loopSelected(id) {
    var selectedArray = new Array();
    var selObj = id; 
    var i;
if(selObj!=null){
    for (i=0; i<selObj.options.length; i++) { 
        
            selectedArray[i] = selObj.options[i].value;
    } }
return selectedArray;
}
//loopSelected();
//Save message
saveMessage3(Comment1,Comment2,Discourse1,Discourse2,Premise1,Premise2,Relation,Response);

//Show alert
document.querySelector('.alert').style.display='block';

//Hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display='none';
},3000);

//Clear form
document.getElementById('contactForm3').reset();
if(select3_1!=null)
removeOptions(select3_1);
if(select3_2!=null)
removeOptions(select3_2);
if(prem_select3_1!=null)
removeOptions(prem_select3_1);
if(prem_select3_2!=null)
removeOptions(prem_select3_2);
premise_list3_1.length=0;
premise_list3_2.length=0;
submit_rel3.length=0;
 }
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

 
//Save message to firebase
function saveMessage3(Comment1,Comment2,Discourse1,Discourse2,Premise1,Premise2,Relation,Response){
	var newMessageRef3=firebase.database().ref('Annotations3').push();
	newMessageRef3.set({
		Comment1: Comment1,
		Comment2: Comment2,
		Claim1: Discourse1,
		Claim2: Discourse2,
		Premise1: Premise1,
		Premise2: Premise2,
		Relation: Relation,
		Response: Response
	});
}

