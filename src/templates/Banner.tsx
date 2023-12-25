import Link from 'next/link'

import { Button } from '../button/Button'
import { CTABanner } from '../cta/CTABanner'
import { Section } from '../layout/Section'

const Banner = () => (
	<Section>
		<CTABanner
			title='Жоба жайлы сұрақтарыңыз болса info@tilqazyna.kz жолдауға болады'
			subtitle=''
			button={
				<Link href='mailto:info@tilqzyna.kz'>
					<Button>Хат жолдау</Button>
				</Link>
			}
		/>
	</Section>
)

export { Banner }
