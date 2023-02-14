
import React, { useEffect, useState } from 'react'
import '../styles/game/Game.css'
import { AiFillWindows, AiFillAndroid } from "react-icons/ai";
import { GrStorage, GrCpu, GrPersonalComputer } from "react-icons/gr";
import { CgSmartphoneRam } from "react-icons/cg";
import Data from '../data.json'
//componentes
import Tag from '../components/Tag'

//Images
import mega from '../images/mega.webp'
import drive from '../images/drive.png'
import mediafire from '../images/mediafire.png'

export default function Game() {

	const [data, setData] = useState([])
	const [images, setImages] = useState([])

	useEffect(() => {
		setData(Data[0])
		setImages(Data[0].images)
	}, [])


	return (
		<div className='GameContainer'>

			<div className='GameSubContainer'>

				<div className='sectionHome GameTags'>
					<p className='titleSectionHome'>Etiquetas</p>
					<div>
						<Tag tag="test" />
						<Tag tag="tesing" />
						<Tag tag="asdwd" />
						<Tag tag="fqwfs" />
						<Tag tag="gwfdxfs" />
						<Tag tag="tasdq wdqwdw" />
						<Tag tag="gqfwqf" />
						<Tag tag="gwegeg" />
						<Tag tag="thrhrf" />
						<Tag tag="trehre" />
						<Tag tag="tesrrert" />
						<Tag tag="teste" />
						<Tag tag="testet erwefd" />
						<Tag tag="test eff" />
						<Tag tag="test qwef" />
						<Tag tag="testfewf" />
						<Tag tag="testqwfw" />
						<Tag tag="test fwef" />
						<Tag tag="testfwef" />
						<Tag tag="test" />
						<Tag tag="test" />
						<Tag tag="testqwdw" />
						<Tag tag="testqwd" />
						<Tag tag="testasd" />
						<Tag tag="testa" />
						<Tag tag="testwdqd dwqd" />
						<Tag tag="testdqwd dw" />
						<Tag tag="test add" />
						<Tag tag="testasd " />
						<Tag tag="testwdqwd" />
					</div>
				</div>

				<div className='GameContentContainer'>
					<h1 className='firtsTitleGame'>{data.name}</h1>

					<div>
						<p className='secondTitleGame'>{data.name} {data.author}</p>

						<div>
							<div className='frontPageGameContainer'>
								<img
									src={data.frontPage}
									className='frontPageGame'
								/>
							</div>

							<div>

								<div className="GameImagesContainer">
									{
										images.map((item) => {
											return (
												<div className='GameImagenContainer'>
													<img
														src={item}
														className='GameImagen'
													/>
												</div>
											)
										})
									}
								</div>

							</div>

							<div className='descriptionGameContainer'>
								<p className='titleDescriptionGame'>Descripcion</p>
								<p className='dataDescriptionGame'>{data.description}</p>
							</div>

							<div className='ReqAndPlatContainer'>
								<p className='titleDescriptionGame'>Requerimientos y plataformas</p>

								<div className='ReqAndPlatSubContainer'>
									<div className='sectionReqAndPlat'>
										<p className='subTitleSection'>Requerimientos</p>

										<div className='itemReqAndPlat'>
											<GrStorage className='iconReqAndPlat' /> Tamaño
										</div>

										<div className='itemReqAndPlat' >
											<CgSmartphoneRam className='iconReqAndPlat' /> Ram
										</div>

										<div className='itemReqAndPlat' >
											<GrCpu className='iconReqAndPlat' /> Procesador
										</div>

										<div className='itemReqAndPlat' >
											<GrPersonalComputer className='iconReqAndPlat' /> Sistema operativo
										</div>

									</div>

									<div className='sectionReqAndPlat'>
										<p className='subTitleSection'>Plataformas</p>

										<div className='itemReqAndPlat' >
											<AiFillWindows className='iconReqAndPlat' /> Windows
										</div>

										<div className='itemReqAndPlat' >
											<AiFillAndroid className='iconReqAndPlat' /> Android
										</div>
									</div>
								</div>
							</div>

							<div className='downloadGameContainer'>
								<div className='downloadSectionGameContainer'>
									<p className='titleDescriptionGame' >Descargar para pc</p>

									<div>
										<div className='itemDownloadGameContainer'>
											<div>
												<img
													src={mega}
													className='iconDownloadGame'
												/>
											</div>

											<div>
												<p className='textDownloadGame' >mega</p>
											</div>
										</div>

										<div className='itemDownloadGameContainer'>

											<div>
												<img
													src={mediafire}
													className='iconDownloadGame'
												/>
											</div>
											<div>
												<p className='textDownloadGame' >mediaFire</p>
											</div>

										</div>

										<div className='itemDownloadGameContainer'>
											<div>
												<img
													src={drive}
													className='iconDownloadGame'
												/>
											</div>
											<div>
												<p className='textDownloadGame' >drive</p>
											</div>
										</div>
									</div>

								</div>


								<div className='downloadSectionGameContainer'>
									<p className='titleDescriptionGame' >Descargar para android</p>

									<div>
										<div className='itemDownloadGameContainer'>
											<div>
												<img
													src={mega}
													className='iconDownloadGame'
												/>
											</div>

											<div>
												<p className='textDownloadGame'>mega</p>
											</div>
										</div>

										<div className='itemDownloadGameContainer'>

											<div>
												<img
													src={mediafire}
													className='iconDownloadGame'
												/>
											</div>
											<div>
												<p className='textDownloadGame' >mediaFire</p>
											</div>

										</div>

										<div className='itemDownloadGameContainer'>
											<div>
												<img
													src={drive}
													className='iconDownloadGame'
												/>
											</div>
											<div>
												<p className='textDownloadGame' >drive</p>
											</div>
										</div>
									</div>

								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
