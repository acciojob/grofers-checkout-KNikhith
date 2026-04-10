const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let cost=document.querySelectorAll(".prices");
	let totalcost=0;
	cost.forEach(item=>{
		totalcost+=Number(item.textContent);
	})
  let row=document.createElement("tr");
let col1=row.insertCell(0);
let col2=row.insertCell(1);
col1.textContent="Total Value";
col2.textContent=`${totalcost}`;
col2.id="ans";
document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

