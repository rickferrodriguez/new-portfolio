import FIRST_EXPERIENCE from '../assets/exp-laboral-1.webp'

export function Experience () {
  return (
    <section id='experience'>
      <h2 className='text-kanagawa-autumnRed text-xl font-bold mb-6'>
        PROFESSIONAL EXPERIENCE
      </h2>

      <article className='grid gap-6'>
        <section className='flex justify-between lg:flex lg:justify-start lg:gap-5'>
          <div className='grid gap-1 items-center lg:order-2'>
            <h3 className='text-kanagawa-roninYellow text-base font-bold'>
              Systems Engineer, Web Developer
            </h3>
            <strong className='text-kanagawa-boatYellow text-base'>
              Planupsoft
            </strong>
            <span className='text-sm font-bold'>June 2021 - February 2023</span>
          </div>
          <img
            className='w-[100px] h-full aspect-video object-contain bg-white px-1 lg:order-1 rounded-xl'
            src={FIRST_EXPERIENCE}
            alt='first experience Planupsoft'
          />
        </section>
        <section className='grid gap-3'>
          <strong className='text-kanagawa-autumnGreen'>KEY ACCOMPLISHMENTS</strong>
          <ul className='list-disc pl-5'>
            <li>
              Improved performance of a web product by replacing loop iterations
              for information display.
            </li>
            <li>
              Satisfaction in the usability of an application, by implementing
              an Improvement Plan system between a qualifier and a qualified
              user.
            </li>
            <li>
              Agile response in the development and support of new features,
              from 1 month to 1 week, by constantly monitoring the structure of
              the application and identifying previous problems.
            </li>
          </ul>
        </section>
        <section className='grid gap-3'>
          <strong className='text-kanagawa-autumnGreen'>RESPONSIBILITIES</strong>
          <ul className='list-disc pl-5'>
            <li>
              Developing and supporting web applications based on JavaScript,
              Angular and Magento.
            </li>
            <li>
              Provide technical support to customers to resolve issues related
              to these applications using tools such as Git, SSH and FileZilla.
            </li>
            <li>
              Design and create landing pages and new functionality for the
              company's products.
            </li>
          </ul>
        </section>
      </article>
    </section>
  )
}
