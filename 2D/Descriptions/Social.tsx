import RedirectIcon from '../Components/RedirectIcon'

const socialList = [{
  title: 'Linkedln',
  link: 'https://www.linkedin.com/in/leeyuanhooi/'
},
{
  title: 'Resume (Google Drive)',
  link: 'https://drive.google.com/drive/folders/1KTx2XUDSkF7p7cxiUZgh6E7pS0fP_Bkl?usp=share_link'
},
{
  title: 'Github',
  link: 'https://github.com/LYH977'
}]

export const SocialMarkup = (
  <>
    <h1>About</h1>
    <ul>

      { socialList.map((item, index) => (
        <li key={ index }>
          <a target='_blank' href={ item.link }>
            { item.title }{ ' ' }
          </a>
          <RedirectIcon />
        </li>
      )) }
    </ul>
  </>
)
