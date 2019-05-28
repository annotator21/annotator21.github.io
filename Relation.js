
function removeOptions(selectbox)
{
    var i;
    if(selectbox!=null){
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }}
}
function Reset(id) {
        var dropDown = document.getElementById(id);
        dropDown.selectedIndex = -1;
    }
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
var rel_list1_1f=new Array(),rel_list2_1f=new Array(),rel_list3_1f=new Array();
var rel_list1_1,rel_list1_2,rel_list2_1,rel_list2_2,rel_list3_1,rel_list3_2;
var claim_rel_list1_1f=new Array(),claim_rel_list2_1f=new Array(),claim_rel_list3_1f=new Array();
var submit_rel1=new Array(),submit_rel2=new Array(),submit_rel3=new Array();
var Rel_sup;


function Till_now1_1(){
    event.preventDefault();
  var data_till1=Array.from(submit_rel1);
var output1=document.getElementById('text_till_1');
    var i=0,new_dat1=new Array();;
    for(i=0;i<data_till1.length;i++){
    new_dat1.push(data_till1[i].join(","));
    }
 output1.innerHTML = new_dat1.join("\n");
   document.getElementById("Till_now1.1").style.display = "block";
 
}
function Till_now2_2(){
    event.preventDefault();
  var data_till2=Array.from(submit_rel2);
var output2=document.getElementById('text_till_2');
    var i=0,new_dat2=new Array();
    for(i=0;i<data_till2.length;i++){
    new_dat2.push(data_till2[i].join(","));
    }
 output2.innerHTML = new_dat2.join("\n");
 document.getElementById("Till_now2.1").style.display = "block";
}
function Till_now3_3(){
    event.preventDefault();
  var data_till3=Array.from(submit_rel3);
var output3=document.getElementById('text_till_3');
    var i=0,new_dat3=new Array();;
    for(i=0;i<data_till3.length;i++){
    new_dat3.push(data_till3[i].join(","));
    }
 output3.innerHTML = new_dat3.join("\n");
 document.getElementById("Till_now3.1").style.display = "block";
}

function close_TillForm1_1() {
  event.preventDefault();
  document.getElementById("Till_now1.1").style.display = "none";
}
function close_TillForm2_1() {
  event.preventDefault();
  document.getElementById("Till_now2.1").style.display = "none";
}
function close_TillForm3_1() {
  event.preventDefault();
  document.getElementById("Till_now3.1").style.display = "none";
}


function Rel_con1_1(){
event.preventDefault();
    Rel_sup="Continue";
}
function Rel_con2_1(){
event.preventDefault();
    Rel_sup="Continue";
}
function Rel_con3_1(){
event.preventDefault();
    Rel_sup="Continue";
}
function Rel_att1_1(){
event.preventDefault();
    Rel_sup="Attack";
}
function Rel_att2_1(){
event.preventDefault();
    Rel_sup="Attack";
}
function Rel_att3_1(){
event.preventDefault();
    Rel_sup="Attack";
}
function Rel_supp1_1(){
event.preventDefault();
    Rel_sup="Support";
}
function Rel_supp2_1(){
event.preventDefault();
    Rel_sup="Support";
}
function Rel_supp3_1(){
event.preventDefault();
    Rel_sup="Support";
}
function elementSelected1(id) { 
    var index;
    var selObj = id; 
    var i;
    var count = 0;
    if(selObj!=null){
    for (i=0; i<selObj.options.length; i++) { 
        if (selObj.options[i].selected) {
            index=selObj.options[i].value;
        } 
    } }
return index;
}
function elementSelected(id) { 
    var index=new Array();
    var selObj = id; 
    var i;
    var count = 0;
    if(selObj!=null){
    for (i=0; i<selObj.options.length; i++) { 
        if (selObj.options[i].selected) {
            index.push(selObj.options[i].value);
        } 
    } }
return index;
}
function elementSelected2(id) { 
    var selObj = id; 
    var i;
    var count = 0;
    if(selObj!=null){
    for (i=0; i<selObj.options.length; i++) { 
        if (selObj.options[i].selected) {
            count=count+1;
        } 
    } }
   //console.log(count);
    return count;
}


function Rel_sub1_1(){
event.preventDefault();
if(elementSelected2(document.getElementById("Relation_claim1.1"))!=0 && elementSelected2(document.getElementById("Relation_premise1.1"))!=0) 
submit_rel1.push(["C:"+elementSelected1(document.getElementById("Relation_claim1.1")),"P:"+elementSelected1(document.getElementById("Relation_premise1.1")),Rel_sup]);
else if(elementSelected2(document.getElementById("Relation_claim1.1"))>0 && elementSelected2(document.getElementById("Relation_premise1.1"))==0)
submit_rel1.push(["C:"+elementSelected(document.getElementById("Relation_claim1.1"))[0],"C:"+elementSelected(document.getElementById("Relation_claim1.1"))[1],Rel_sup]);
else
submit_rel1.push(["P:"+elementSelected(document.getElementById("Relation_premise1.1"))[0],"P:"+elementSelected(document.getElementById("Relation_premise1.1"))[1],Rel_sup]);
//console.log(submit_rel1);
    Reset("Relation_claim1.1");
    Reset("Relation_premise1.1");
    //document.getElementById('myForm1.1').reset();

}
function Rel_sub2_1(){
event.preventDefault();
if(elementSelected2(document.getElementById("Relation_claim2.1"))!=0 && elementSelected2(document.getElementById("Relation_premise2.1"))!=0)
submit_rel2.push(["C:"+elementSelected1(document.getElementById("Relation_claim2.1")),"P:"+elementSelected1(document.getElementById("Relation_premise2.1")),Rel_sup]);
else if(elementSelected2(document.getElementById("Relation_claim2.1"))>0 && elementSelected2(document.getElementById("Relation_premise2.1"))==0)
submit_rel2.push(["C:"+elementSelected(document.getElementById("Relation_claim2.1"))[0],"C:"+elementSelected(document.getElementById("Relation_claim2.1"))[1],Rel_sup]);
else
submit_rel2.push(["P:"+elementSelected(document.getElementById("Relation_premise2.1"))[0],"P:"+elementSelected(document.getElementById("Relation_premise2.1"))[1],Rel_sup]);
//document.getElementById('myForm2.1').reset();
   Reset("Relation_claim2.1");
    Reset("Relation_premise2.1");
}
function Rel_sub3_1(){
event.preventDefault();
if(elementSelected2(document.getElementById("Relation_claim3.1"))!=0 && elementSelected2(document.getElementById("Relation_premise3.1"))!=0)
submit_rel3.push(["C:"+elementSelected1(document.getElementById("Relation_claim3.1")),"P:"+elementSelected1(document.getElementById("Relation_premise3.1")),Rel_sup]);
else if(elementSelected2(document.getElementById("Relation_claim3.1"))>0 && elementSelected2(document.getElementById("Relation_premise3.1"))==0)
submit_rel3.push(["C:"+elementSelected(document.getElementById("Relation_claim3.1"))[0],"C:"+elementSelected(document.getElementById("Relation_claim3.1"))[1],Rel_sup]);
else
submit_rel3.push(["P:"+elementSelected(document.getElementById("Relation_premise3.1"))[0],"P:"+elementSelected(document.getElementById("Relation_premise3.1"))[1],Rel_sup]);
//document.getElementById('myForm3.1').reset();
    Reset("Relation_claim3.1");
    Reset("Relation_premise3.1");
    
}

function openForm1_1() {
  event.preventDefault();
    rel_list1_1=Array.from(premise_list1_1);
    rel_list1_2=Array.from(premise_list1_2);
  if(prem_select1_1!=null)
rel_list1_1.push(loopSelected(prem_select1_1));
if(prem_select1_2!=null)
rel_list1_2.push(loopSelected(prem_select1_2));
  var i=0,j=0,k=rel_list1_1.length,m=rel_list1_2.length;
  for(i=0;i<k+m;i++){
    if(i<k){
  for(j=0;j<rel_list1_1[i].length;j++)
    rel_list1_1f.push(rel_list1_1[i][j]);
  }
  else{
  for(j=0;j<rel_list1_2[i-k].length;j++)
    rel_list1_1f.push(rel_list1_2[i-k][j]);
  }
  }
  var t1=loopSelected(select1_1),t2=loopSelected(select1_2);
  k=t1.length,m=t2.length;
  for(i=0;i<k+m;i++){
    if(i<k){
    claim_rel_list1_1f.push(t1[i]);
  }
  else{
    claim_rel_list1_1f.push(t2[i-k]);
  }
  }
   
  var rel_claim_select1_1= document.getElementById("Relation_claim1.1");
  for(i=0;i<claim_rel_list1_1f.length;i++)
  rel_claim_select1_1.options[i] = new Option(i.toString()+" "+claim_rel_list1_1f[i],i.toString()+" "+claim_rel_list1_1f[i]);
var rel_select1_1= document.getElementById("Relation_premise1.1");
  for(i=0;i<rel_list1_1f.length;i++)
  rel_select1_1.options[i] = new Option(i.toString()+" "+rel_list1_1f[i],i.toString()+" "+rel_list1_1f[i]);

  document.getElementById("myForm1.1").style.display = "block";
}

function closeForm1_1() {
  event.preventDefault();
    var relc=document.getElementById("Relation_claim1.1"),relp=document.getElementById("Relation_premise1.1");
   removeOptions(relc);
    removeOptions(relp);
    rel_list1_1.length=0;
    rel_list1_2.length=0;
    rel_list1_1f.length=0;
    claim_rel_list1_1f.length=0;
  document.getElementById("myForm1.1").style.display = "none";
}



function openForm2_1() {
  event.preventDefault();
    rel_list2_1=Array.from(premise_list2_1);
    rel_list2_2=Array.from(premise_list2_2);
  if(prem_select2_1!=null)
rel_list2_1.push(loopSelected(prem_select2_1));
if(prem_select2_2!=null)
rel_list2_2.push(loopSelected(prem_select2_2));
  var i=0,j=0,k=rel_list2_1.length,m=rel_list2_2.length;
  for(i=0;i<k+m;i++){
    if(i<k){
  for(j=0;j<rel_list2_1[i].length;j++)
    rel_list2_1f.push(rel_list2_1[i][j]);
  }
  else{
  for(j=0;j<rel_list2_2[i-k].length;j++)
    rel_list2_1f.push(rel_list2_2[i-k][j]);
  }
  }
  var t1=loopSelected(select2_1),t2=loopSelected(select2_2);
  k=t1.length,m=t2.length;
  for(i=0;i<k+m;i++){
    if(i<k){
    claim_rel_list2_1f.push(t1[i]);
  }
  else{
    claim_rel_list2_1f.push(t2[i-k]);
  }
  }
  var rel_claim_select2_1= document.getElementById("Relation_claim2.1");
  for(i=0;i<claim_rel_list2_1f.length;i++)
  rel_claim_select2_1.options[i] = new Option(i.toString()+" "+claim_rel_list2_1f[i],i.toString()+" "+claim_rel_list2_1f[i]);
var rel_select2_1= document.getElementById("Relation_premise2.1");
  for(i=0;i<rel_list2_1f.length;i++)
  rel_select2_1.options[i] = new Option(i.toString()+" "+rel_list2_1f[i],i.toString()+" "+rel_list2_1f[i]);
  
  document.getElementById("myForm2.1").style.display = "block";
}

function closeForm2_1() {
  event.preventDefault();
   var relc=document.getElementById("Relation_claim2.1"),relp=document.getElementById("Relation_premise2.1");
   removeOptions(relc);
    removeOptions(relp);
    rel_list2_1.length=0;
    rel_list2_2.length=0;
    rel_list2_1f.length=0;
    claim_rel_list2_1f.length=0;
  document.getElementById("myForm2.1").style.display = "none";
}


function openForm3_1() {
  event.preventDefault();
   rel_list3_1=Array.from(premise_list3_1);
   rel_list3_2=Array.from(premise_list3_2);
  if(prem_select3_1!=null)
rel_list3_1.push(loopSelected(prem_select3_1));
if(prem_select3_2!=null)
rel_list3_2.push(loopSelected(prem_select3_2));
  var i=0,j=0,k=rel_list3_1.length,m=rel_list3_2.length;
  for(i=0;i<k+m;i++){
    if(i<k){
  for(j=0;j<rel_list3_1[i].length;j++)
    rel_list3_1f.push(rel_list3_1[i][j]);
  }
  else{
  for(j=0;j<rel_list3_2[i-k].length;j++)
    rel_list3_1f.push(rel_list3_2[i-k][j]);
  }
  }
  var t1=loopSelected(select3_1),t2=loopSelected(select3_2);
  k=t1.length,m=t2.length;
  for(i=0;i<k+m;i++){
    if(i<k){
    claim_rel_list3_1f.push(t1[i]);
  }
  else{
    claim_rel_list3_1f.push(t2[i-k]);
  }
  }
  var rel_claim_select3_1= document.getElementById("Relation_claim3.1");
  for(i=0;i<claim_rel_list3_1f.length;i++)
  rel_claim_select3_1.options[i] = new Option(i.toString()+" "+claim_rel_list3_1f[i],i.toString()+" "+claim_rel_list3_1f[i]);
var rel_select3_1= document.getElementById("Relation_premise3.1");
  for(i=0;i<rel_list3_1f.length;i++)
  rel_select3_1.options[i] = new Option(i.toString()+" "+rel_list3_1f[i],i.toString()+" "+rel_list3_1f[i]);

  document.getElementById("myForm3.1").style.display = "block";
}

function closeForm3_1() {
  event.preventDefault();
    var relc=document.getElementById("Relation_claim3.1"),relp=document.getElementById("Relation_premise3.1");
   removeOptions(relc);
    removeOptions(relp);
    rel_list3_1.length=0;
    rel_list3_2.length=0;
    rel_list3_1f.length=0;
    claim_rel_list3_1f.length=0;
  document.getElementById("myForm3.1").style.display = "none";
}
