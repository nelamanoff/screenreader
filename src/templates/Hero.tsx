import Link from 'next/link'
import React from 'react'

import { Background } from '../background/Background'
import { HeroOneButton } from '../hero/HeroOneButton'
import { Section } from '../layout/Section'
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns'
import { Logo } from './Logo'

const Hero = () => (
	<Background color='bg-gray-100'>
		<Section yPadding='py-6'>
			<NavbarTwoColumns logo={<Logo xl />}>
				<li>
					<Link href='#about'>Жоба</Link>
				</li>
				<li>
					<Link href='#download'>Жүктеу</Link>
				</li>
				<li>
					<Link href='#api'>API</Link>
				</li>
			</NavbarTwoColumns>
		</Section>
		<Section yPadding='pt-20 pb-32'>
			<HeroOneButton
				title={
					<span className='text-primary-500'>
						Көру қабілеті нашар адамдарға арналған экранды оқу жүйесі
					</span>
				}
				description=''
			/>
		</Section>
	</Background>
)

export { Hero }
