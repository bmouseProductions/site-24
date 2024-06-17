import title from '../../../../../../assets/images/Services/SubPages/Audiovisual/docTalk.webp'
import cenario from '../../../../../../assets/images/Services/SubPages/Audiovisual/cenarioDocTalk.webp'

export default function SectionFour(){
    return (
        <section className="container px-5 lg:px-10 xl:px-20 mx-auto mb-20">
            <div className='flex flex-col gap-7'>
                <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:'>
                    <div className='w-full flex items-center'>
                        <img 
                            src={title} 
                            alt="" 
                            className=''
                        />
                    </div>

                    <div className='w-full flex items-center'>
                        <h2 className=' text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px]'>
                            Um jeito simples e profissional de falar sobre marketing médico.
                        </h2>
                    </div>
                </div>

                <p>
                    Um programa inovador e profissional, dedicado a discutir o marketing médico de maneira simples e acessível. 
                    Neste espaço, reunimos especialistas renomados tanto da área do marketing quanto da saúde para uma troca de informações 
                    e experiências.
                </p>

                <img 
                    src={cenario}
                    alt="" 
                />
            </div>
        </section>
    )
}