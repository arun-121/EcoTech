let city={

'chennai':`M/s. Tritech Systems,No.26, Arcot Road,Porur, 
Chennai- 600 116.Mail: triabdullah@yahoo.com Contact: 044 – 42617179, 9003077866 `
,
'thiruvallur':`M/s. Aer World Wide,
2B, 2C, 2D, 2E, Elanthanjeri Village, Madhavaram Taluk,
Tiruvallur. `,
'kancheeouram':`M/s. TES-AMM (India) Pvt. Ltd.,
Plot No.:A-18, SIPCOT Industrial Growth Centre, Panruti “A”
Village, Oragadam Sriperumbudur Tk, Kancheepuram District –
631 604 Mail: guha@tes-amm.net Contact: 044-
45000353,9176755506. `,
'coimbatore':`M/s. Green Era Recyclers,
37, Sivanandha Industrial Complex,Dr. M.S. Udhayamurthy
Nagar,Thadagam Road, Edayarpalayam, Coimbatore District-641
025. Mail:greenera2k17@gmail.com prashkuttan@gmail.com
Contact 9965664526`,
'trichy':`M/s. Micro E-Waste Recyclers,
S.F No. 301/3,Varaganeri village, Trichy east Taluk, Trichy
District. `,
'kumarapalayam':`M/s Sai Sri Waste Management Pvt Ltd,
SF No 443/1B2, 443/2A, Padaveedu
village, Kumarapalayam taluk,
Kumarapalayam district
`,
'dharmapuri':`M/s John Firm SF No.144/1C2,
Kerekodihalli village, Karimangalam taluk,
Dharmapuri district.`,
'chengalpattu':`M/s E PROCESS House c/o Bharat
Electronics Limited, SF No 3 & 10/1
Nanthambakkam village, Alandur taluk,
Chengalpattu district`,

'erode':`2 MGR Nagar, Chinna Aandan Kovil Road,(Near KVB ATM)`

}
let result= document.getElementById("result");


// document.getElementsByClassName('button-6').addEventListener('click',()=>{

//     let cityValue =document.getElementById("cityValue").value.toLowerCase();

//     result.innerHTML=city[cityValue]


// })
function locate()
{
    let cityValue =document.getElementById("cityValue").value.toLowerCase();

  result.innerHTML=city[cityValue]
}

