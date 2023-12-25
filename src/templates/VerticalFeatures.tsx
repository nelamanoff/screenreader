import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import YouTube from 'react-youtube'

import { Section } from '../layout/Section'

const opts = {
	height: '280',
	width: '500',
	playerVars: {
		autoplay: 0
	}
}

const VerticalFeatures = () => (
	<>
		<Section id='about' title='Жоба жайлы' description=''>
			<div>
				<h3 className='font-medium text-gray-900'>Жобаның мақсаты:</h3>
				<p>
					Қазақстан Республикасының азаматтары үшін ақпаратқа, білімге және
					басқа ресурстарға тең қолжетімділікті қамтамасыз ететін қазақ
					тіліндегі мәтінді дауыстау үшін инновациялық қосымша жасау.
				</p>
				<br />
				<p>
					«Ш. Шаяхметов атындағы «Тіл-Қазына» ұлттық-ғылыми практикалық
					орталығы» КеАҚ және ЖК “KRATER”, ҚР Ғылым жəне жоғары білім
					министрлігі Тіл саясаты комитеті тапсырысы бойынша әзірленді
				</p>
			</div>
		</Section>
		<Section id='download' title='Жүктеу' description=''>
			<>
				<div className='pb-2'>
					<div className='flex'>
						<span className='pb-2 pr-2'>
							<img src='/assets/images/windows.png' alt='' width='30' />
						</span>
						<span className='text-lg font-bold text-gray-900'>Windows</span>
						<br />
					</div>

					<p className='flex text-lg'>
						NVDA Voice бағдарламасы (NVDA 2023.1 соңғы тексерілген нұсқасы)
					</p>
					<p className='text-lg'>
						<Link
							href='/assets/file/NVDA-qaz.zip'
							className='link-with-image flex'
						>
							NVDA 2023.1 - Жүктеу{' '}
							<span>
								<Image
									src='/assets/images/download-flat.svg'
									alt=''
									width={25}
									height={25}
								/>
							</span>
						</Link>
					</p>
					<br />
				</div>
				<div className='flex'>
					<span className='pb-2 pr-2'>
						<img src='/assets/images/android.png' alt='' width='30' />
					</span>
					<span className='text-lg font-bold text-gray-900'>
						Android \ Tankback
					</span>
					<br />
				</div>
				<p className='link-with-image flex text-lg'>
					<Link
						href='https://nvda.ru/uploads/setup/nvda_2023.3.exe'
						className='link-with-image flex'
					>
						Android арналған Talkback - нұсқа
					</Link>
					<span>
						<Image
							src='/assets/images/download-flat.svg'
							alt=''
							width={25}
							height={25}
						/>
					</span>
				</p>
				<br />
				<div className='flex'>
					<span className='pb-2 pr-2'>
						<img src='/assets/images/IOS_logo.svg' alt='' width='30' />
					</span>
					<span className='text-lg font-bold text-gray-900'>iOS</span>
					<br />
				</div>
				<p className='link-with-image flex text-lg'>iOS (жақында...)</p>
				<br />
			</>
		</Section>
		<Section id='nusqaulyq' title='Нұсқаулықтар' description=''>
			<div>
				<p className='link-with-image flex text-lg'>
					<a
						href='/assets/file/Қазақ тіліндегі экрандық диктор Windows ОЖ.pdf'
						className='link-with-image flex'
					>
						Windows нұсқаулығы PDF - Жүктеу
					</a>
					<span>
						<Image src='/assets/images/pdf.svg' alt='' width={25} height={25} />
					</span>
				</p>
				<p className='link-with-image flex text-lg'>
					<a href='/assets/file/.pdf' className='link-with-image flex'>
						Android нұсқаулығы PDF - Жүктеу
					</a>
					<span>
						<Image src='/assets/images/pdf.svg' alt='' width={25} height={25} />
					</span>
				</p>
				<p className='link-with-image flex text-lg'>
					<a href='/assets/file/.pdf' className='link-with-image flex'>
						iOS нұсқаулығы PDF - Жүктеу
					</a>
					<span>
						<Image src='/assets/images/pdf.svg' alt='' width={25} height={25} />
					</span>
				</p>
			</div>
			<div>
				<br />
				<div className='grid grid-cols-2 grid-rows-2 gap-4'>
					<div>
						<YouTube videoId='_2WBV0PjXhw' opts={opts} />
					</div>
					<div>
						<YouTube videoId='TW5Te2w_VN8' opts={opts} />
					</div>
					<div className='col-start-2 row-start-2'>
						<YouTube videoId='Cf6O-oVyEak' opts={opts} />
					</div>
					<div className='col-start-1 row-start-2'>
						<YouTube videoId='JwkUEsFPuBQ' opts={opts} />
					</div>
				</div>
			</div>
		</Section>
		<Section id='api' title='API' description=''>
			<div>
				<p>
					Мәтіннен сөйлеуге түрлендіруге арналған API әр түрлі дауыстық
					модельдерді қолдана отырып, мәтінді сөйлеуге мүмкіндік береді. Ол
					аудионы синтездеу жасау үшін GET және POST өтінім түрлерін ұсынады.
				</p>
				<details>
					<summary>Негізгі URL</summary>
					<p>https://api.tilqazyna.kz/</p>
				</details>
				<p>Мәтінді сөйлеуге түрлендіру (POST)</p>
				<details>
					<summary>
						Берілген дауыстық модельді қолдана отырып, берілген мәтінді сөйлеуге
						түрлендіреді.
					</summary>
					<p>POST /api/tts</p>
				</details>
				<details>
					<summary>Мысалы</summary>
					<p>
						<code>{`{ "text": "Сәлем, әлем!", "voice": "kk-issai-high.onnx" }`}</code>
					</p>
				</details>
				<details>
					<summary>Жауап</summary>
					<ul>
						<li>Status Code: 200 (OK)</li>
						<li>Content-Type: audio/wav</li>
					</ul>
				</details>
			</div>
			<div></div>
		</Section>
	</>
)

export { VerticalFeatures }
