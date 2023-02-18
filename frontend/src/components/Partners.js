import React, { useEffect, useState, useRef } from "react";
import { PartnerCard } from "./PartnerCard";
import emailjs from "@emailjs/browser";
import pekarnya from "../media/images/pekarnya.png";
import mart from "../media/images/mart.jpg";
import strel from "../media/images/4szLGMSEh-4.jpg";
import topstr from "../media/images/ts_logo 1.jpg";
import gonchar from "../media/images/gonchar.jpg";
import planum from "../media/images/planum.jpg";
import shoper from "../media/images/shoper.jpg";
import candles from "../media/images/candles.jpg";
import neon from "../media/images/neon.jpg";
import veco from "../media/images/veco.jpg";
import printer from "../media/images/printer.jpg";
import a1 from "../media/images/a1.png";
import a2 from "../media/images/a1.png";
import a3 from "../media/images/a1.png";

import leftArrow from "../media/icons/leftArrow.svg";
import rightArrow from "../media/icons/rightArrow.svg";

export const Partners = () => {
	return (
		<div className="PartnersMainText">
			<p>Наши партнёры - наша гордость.</p>
			<span>
				Мы сотрудничаем с лучшими брендами различных отраслей. Наша миссия - построить взаимовыгодное
				сотрудничество с выдающимися компаниями. Только будучи полезными друг другу мы сможем прийти к успеху.
			</span>
		</div>
	);
};

export const PartnersDiscount = () => {
	let offset = 0,
		carouselLen = 0;

	const PartnersDiscountImage = [{ img: a1 }, { img: a2 }, { img: a3 }];

	const [a, setA] = useState(0);
	const [pic, setPic] = useState(0);

	useEffect(() => {
		setA(document.querySelector(".DiscountImages-container"));
		setPic(document.querySelector(".DicosountImage-container"));
	}, [a, pic]);

	const slideleft = () => {
		carouselLen =
			PartnersDiscountImage.length * (+pic.offsetWidth + +getComputedStyle(pic).marginRight.replace("px", ""));

		let offsetStep = +pic.offsetWidth + +getComputedStyle(pic).marginRight.replace("px", "");
		offset -= offsetStep;

		if (offset < 0) {
			offset = carouselLen - offsetStep;
		}

		a.style.left = -offset + "px";
	};
	const slideright = () => {
		carouselLen =
			PartnersDiscountImage.length * (+pic.offsetWidth + +getComputedStyle(pic).marginRight.replace("px", ""));

		let offsetStep = +pic.offsetWidth + +getComputedStyle(pic).marginRight.replace("px", "");
		offset += offsetStep;

		if (offset >= carouselLen) {
			offset = 0;
		}

		a.style.left = -offset + "px";
	};

	return (
		<div className="Discount">
			{/* <div className='Shadow-r'></div>
            <div className='Shadow-l'></div> */}
			<div className="PartnersDiscount">
				<div className="DiscountImages-container">
					{PartnersDiscountImage.map((item, index) => {
						return (
							<div key={index} className="DicosountImage-container">
								<img className="DiscountImage" src={item.img} alt="" />
							</div>
						);
					})}
				</div>
			</div>

			<div className="partners-control">
				<div className="partners-btn-container">
					<button className="partners-slideleft" onClick={slideleft}>
						<img src={leftArrow} alt="" />
					</button>
					<button className="partners-slideright" onClick={slideright}>
						<img src={rightArrow} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export const PartnersCards = () => {
	const PartnersList = [
		{
			img: topstr,
			title: "TOPSTRETCHING — международная сеть студий растяжки и фитнеса, предлагающая 3 базовых направления: aerostretching, trx и школа шпагата. Заниматься можно и онлайн, а все локации находятся в шаговой доступности от метро. Скидка 30% всем студентам и преподавателям ЭМИТ.",
		},
		{ img: "", title: "" },
		{
			img: pekarnya,
			title: "Если ты задумывался, где можно провести время после учебы, то компьютерный клуб Пекарня будет отличным выбором. В нём ты сможешь посетить зону приставок и лаунж, где можно перекусить и отдохнуть, а находится клуб совсем рядом!",
		},
		{ img: "", title: "" },
		{
			img: strel,
			title: "Пневматический тир «Майор Ник» новый развивающийся проект в сфере развлечения и спорта. Здесь перед тобой будет представлен большой выбор оружия, от кольта до винтовки Мосина.",
		},
		{ img: "", title: "" },
		{
			img: mart,
			title: "MART — студия художественной вышивки, которая выполняет дизайны любой сложности: от логотипов до картин известных художников! Студия поможет воплотить любую твою задумку. Скидка 15% студентам ЭМИТ.",
		},
		{ img: "", title: "" },
		{
			img: gonchar,
			title: "Гончар и художник — это творческая студия, предлагающая мастер-классы и индивидуальные занятия за гончарным кругом, по ручной лепке и живописи. Скидка 10% для студентов и сотрудников Академии.",
		},
		{ img: "", title: "" },
		{ img: "", title: "" },
		{
			img: planum,
			title: "Стильные и качественные блокноты подойдут любителям планировать, рисовать или вести записи. Они точно помогут сделать твой день более продуктивным.",
		},
		{ img: "", title: "" },
		{
			img: candles,
			title: "YAM.CANDLES – бренд натуральных свечей и подсвечников из гипса ручной работы. Изделия из кокосового воска помогут создать уют в твоём доме, сделав вечера максимально комфортными и атмосферными. Каждый подсвечник с неповторимым узором будет идеальным дополнением в твой интерьер. А сами свечи будут приносить тебе тепло и уют!",
		},
		{ img: "", title: "" },

		{
			img: neon,
			title: "Ребята занимаются разработкой и производством уникальных изделий из гибкого неона для дома и бизнеса. Ты можешь заказать как готовые решения, так и создать что-то эксклюзивное. А дизайнеры Simple Neon помогут визуализировать любую твою задумку. Сделай свой интерьер более ярким, интересным и атмосферным!",
		},
		{ img: "", title: "" },

		{
			img: shoper,
			title: "Делаем шоперы из эко-материалов и наносим на них классные рисунки!",
		},
		{ img: "", title: "" },
		{ img: "", title: "" },
		{
			img: printer,
			title: "Печать моментальных фотографий может стать изюминкой любого мероприятия и запечатлеть миг не только в сердце, но и в твоём фотоальбоме.",
		},
		{ img: "", title: "" },
		{
			img: veco,
			title: "Мы занимаемся репродукцией и отчистки природы в повседневных вещах. Унас есть качественная продукция из эко-материалов",
		},
	];
	return (
		<div className="PartnerCard">
			<div className="PartnersText">НАШИ ПАРТНЕРЫ</div>
			<div className="partners">
				{PartnersList.map((item, index) => {
					return <PartnerCard key={index} img={item.img} span={item.title} />;
				})}
			</div>
		</div>
	);
};

export const PartnersRegistration = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_0x6w4rm", "template_m9aowko", form.current, "cMT7jbpxhcUcgCNXo").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	};
	function showMassage() {
		setDisplayMessage(true);
	}

	const [displayMessage, setDisplayMessage] = useState(false);

	return (
		<div>
			<div className="PartnersLetterText">
				<span>КАК С НАМИ СВЯЗАТЬСЯ</span>
			</div>
			<div className="PartnersLetter1 PartnersLetter"></div>
			<div className="PartnersLetter2 PartnersLetter"></div>
			<div className="PartnersLetter3 PartnersLetter"></div>
			<div className="PartnersLetter4 PartnersLetter"></div>
			<div className="PartnersLetter5 PartnersLetter"></div>
			<div className="PartnersLetter6 PartnersLetter"></div>
			<div className="PartnersLetter7 PartnersLetter"></div>
			<div className="PartnersLetter">
				<form action="#" className="partners-form" method="get" ref={form} onSubmit={sendEmail}>
					{displayMessage ? (
						<div className="showMassage" id="showMassage">
							Сообщение отправлено, проверьте почту!
						</div>
					) : (
						""
					)}

					<label className="form-control-placeholder" for="name">
						Имя
					</label>
					<input type="text" name="user_name" required />
					<label className="form-control-placeholder" for="name">
						e-mail
					</label>
					<input type="email" name="user_mail" required />
					<label className="form-control-placeholder" for="name">
						Телефон
					</label>
					<input type="tele" name="user_telephone" required />
					<label className="form-control-placeholder" for="name">
						Компания
					</label>
					<input type="text" name="user_company" required />
					<button type="submit" className="PartnersButton" onClick={showMassage}>
						ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
					</button>
				</form>
			</div>
			{/* <button className="PartnersButton">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button> */}
		</div>
	);
};

// class Form extends Component{
//   state={
//     inputMail:''
//   }

//   handleInputMailChange=({target:{value}})=>{
//     this.setState({
//       inputMail:value,
//     })
//   }

//   render(){
//     const{inputMail}=this.state
//     return (
//       <div>
//         <div className="PartnersLetterText">
//           <span>КАК С НАМИ СВЯЗАТЬСЯ</span>
//         </div>
//         <div className="PartnersLetter1 PartnersLetter"></div>
//         <div className="PartnersLetter2 PartnersLetter"></div>
//         <div className="PartnersLetter3 PartnersLetter"></div>
//         <div className="PartnersLetter4 PartnersLetter"></div>
//         <div className="PartnersLetter5 PartnersLetter"></div>
//         <div className="PartnersLetter6 PartnersLetter"></div>
//         <div className="PartnersLetter7 PartnersLetter"></div>
//         <div className="PartnersLetter">
//           <form action="#" className="partners-form" method="get">
//             <label className="form-control-placeholder" for="name">
//               Имя
//             </label>
//             <input type="text" name="Имя" />
//             <label className="form-control-placeholder" for="name" >
//               e-mail
//             </label>
//             <input type="email" name="inputMail" value={inputMail} onChange={this.handleInputMailChange}/>
//             <label className="form-control-placeholder" for="name">
//               Телефон
//             </label>
//             <input type="tel" name="Телефон" />
//             <label className="form-control-placeholder" for="name">
//               Компания
//             </label>
//             <input type="text" name="Компания" />
//             <button className="PartnersButton" >ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
//           </form>
//         </div>
//         {/* <button className="PartnersButton">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button> */}
//       </div>
//     );
//   }
// };

// export default Form;
