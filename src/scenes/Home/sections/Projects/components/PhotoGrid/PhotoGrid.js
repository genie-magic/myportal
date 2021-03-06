import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './PhotoGrid.css';
import PhotoGridFilter from '../PhotoGridFilter/PhotoGridFilter';

const Shuffle = window.Shuffle;
const projects = [
  {
    id: 0,
    image: 'rarible',
    skills: 'React.js/Web3.js/Nest.js/IPFS + Solidity',
    groups: ['javascript', 'blockchain', 'nodejs'],
    title: 'Rarible',
    isVisit: true,
    imageCounts: 5,
    titleDetail: 'Rarible.com',
    subtitle: 'Rarible NFT MarketPlace',
    url: 'https://rarible.com/',
    description:
      'Rarible is a software allowing digital artists and creators to issue and sell custom crypto assets that represent ownership in their digital work. </br> Delivered effective support on Rarible, including formulation and selling of Single Collectible (ERC721) and Multiple Collectible (ERC1155) while using ReactJS, Next.js, Web3.js , IPFS.'
  },
  {
    id: 1,
    image: 'xsigmadefi',
    skills: 'React.js/Web3.js',
    groups: ['javascript', 'blockchain'],
    title: 'xSigma DeFi',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'xsigma.fi',
    subtitle: 'xSigma DeFi',
    url: 'https://xsigma.fi/',
    description:
      'xSigma Finance is a decentralized stablecoin exchange that provides the cheapest transactions for customers and a mining platform for liquidity providers.</br> Interacted with special smart contract that holds pool of three stablecoins (DAI, USD, and USDT) on xSigma DeFi and enhanced wallet choosing logic.'
  },
  {
    id: 2,
    image: 'xsigma',
    skills: 'React.js/Web3.js/bnc-onboard + Nest.js',
    groups: ['javascript', 'nodejs', 'blockchain'],
    title: 'xSigma NFT',
    isVisit: true,
    imageCounts: 5,
    titleDetail: 'xSigma NFT',
    subtitle: 'xSigma NFT MarketPlace',
    url: 'https://xsigma-nft-frontend.vercel.app/',
    description:
      '• Assist various Ethereum wallets including MetaMask , Fortamic, Torus, Coinbase and Trezor </br> • Create single/multiple collectible (ERC721/ERC1155) </br> • Direct Sale/Auction/Resale '
  },
  {
    id: 3,
    image: 'onpinverifeye',
    skills: 'Laravel + Vue/Vuex + Nest.js',
    groups: ['javascript', 'php', 'nodejs'],
    title: 'Verifeye',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'verifeye.info',
    subtitle: 'On-pin Verifeye',
    url: 'https://verifeye.info/',
    description:
      'On-Pin has been a golf course focused technology company for over 20 years. </br> •	Managing Facility/Course/Station/Assets , Members/Visitors , Geofence/Ad  </br> •	Established Real-time Golf Cart Tracking System using Rfid </br> •	Detail analyzed reports for Players/Rounds/Cart/Pace of Play/ Stations '
  },
  {
    id: 4,
    image: 'caw',
    skills: 'Vue.js + Nuxt.js',
    groups: ['javascript'],
    title: 'Carewindow',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'carewindow.com',
    subtitle: 'Skilled Nursing - Assisted Living Facilities',
    url: 'https://carewindow.com/',
    description:
      'Carewindow is resource to bridge families with residential rehabilitation and elderly care providers.'
  },
  {
    id: 5,
    image: 'oohyah',
    skills: 'AngularJS + PHP',
    groups: ['php', 'javascript'],
    title: 'Oohyah',
    isVisit: true,
    imageCounts: 7,
    titleDetail: 'Oohyah.com',
    subtitle: 'Music Revalued A Fan Supported Streaming Platform',
    url: 'https://oohyah.com/',
    description:
      'Oohyah is Music Revalued A Fan Supported Streaming Platform. Provide powerful filter search and easy subscription system with millions of popular songs. Used AngularJS for front-end and Laravel5 for back-end.'
  },
  {
    id: 6,
    image: 'kindertale',
    skills: 'PHP + Javascript',
    groups: ['php'],
    title: 'Kindertales',
    isVisit: true,
    imageCounts: 5,
    titleDetail: 'Kindertales.com',
    subtitle: 'Complete Childcare Management',
    url: 'http://kindertales.com/',
    description:
      'Easy to use childecare management system. Powerful tools for care providers and Parents stay connected to their child from anywhere. Easy online billing, Communication, Very powerful dynamic form builder and CRM are provided. Both android and ios app are ready. Used PHP using own built-in framework'
  },
  {
    id: 7,
    image: 'TuftAndNeedle',
    skills: 'AngularJS + PHP',
    groups: ['php', 'javascript'],
    title: 'TuftAndNeedle',
    isVisit: true,
    imageCounts: 2,
    titleDetail: 'tuftandneedle.com',
    subtitle: 'Matress Site',
    url: 'https://www.tuftandneedle.com',
    description:
      'Tuft and Needle is set to do to the mattress business what Warby Parker did for eyewear. Used AngularJS for front-end and Laravel5 for back-end.'
  },
  {
    id: 8,
    image: 'ztorie',
    skills: 'VueJS',
    groups: ['javascript'],
    title: 'Ztorie Widget Creator',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'Ztorie Widget Creator',
    subtitle: 'Ztorie Widget Creator',
    url: 'https://alp.app.ztorie.com',
    description:
      'Ztorie is like instagram story maker.  User can create any widget by adding video , image , texts , music , effects and move,drag,rotate elements and embed it to any website you want. '
  },
  {
    id: 9,
    image: 'omnibazaar',
    skills: 'NodeJS + ReactJS',
    groups: ['javascript', 'nodejs', 'blockchain'],
    title: 'Omnibazaar',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'Omnibazaar.com',
    subtitle: 'Decentralized e-commerce market platform',
    url: 'http://omnibazaar.com/',
    description:
      'Omnibazaar is decentralized e-commerce marketing platform. You can list products and services in the marketplace and accomplish transaction with crypto coins. Used ElectronJS + ReactJS to build cross platform desktop applications'
  },
  {
    id: 10,
    image: 'shoponya',
    skills: 'PHP ',
    groups: ['php'],
    title: 'Shoponya',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'Shoponya.com',
    subtitle: '',
    url: 'https://www.shoponya.com/',
    description:
      'E-commerce market place to let you spend less time marketing and more time filling orders. Visual tag based search. Integrated stripe payment gateway.'
  },
  {
    id: 11,
    image: 'featurefinance',
    skills: 'Vue.js + Laravel',
    groups: ['javascript', 'php'],
    title: 'FeatureFinance',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'FeatureFinance.com',
    url: 'https://featurefinance.com',
    description:
      'Feature Finance democratizes film by offering a role and a voice to mainstream consumers whose previous participation in the movie business was simply buying tickets. '
  },
  {
    id: 12,
    image: 'healthwallet',
    skills: 'Ionic/Angular',
    groups: ['mobile', 'javascript'],
    title: 'Healthwallet',
    isVisit: false,
    imageCounts: 1,
    titleDetail: 'Healthwallet',
    url:
      'https://apps.apple.com/us/app/the-health-wallet/id1178462674#?platform=iphone',
    description:
      'HealthWallet is a healthcare application that stores all your medical-related information. Health Wallet allows you to keep all of your medical card information in one location, accessible at times when you need it most.'
  }
];

function Figure({ id, groups, imageName, title, skills, handleLearnMore }) {
  const imgSrc = 'images/projects/' + imageName + '.png';
  const groupsJSON = JSON.stringify(groups);

  return (
    <div
      key={id}
      className="col-md-6 col-sm-6 col-lg-4 picture-item"
      data-groups={groupsJSON}
      data-title={title}
    >
      <div className="aspect aspect--16x9">
        <div className="aspect__inner">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="picture-item-overlay" />
        <div className="picture-item-hover">
          <div className="picture-title">{title}</div>
          <div className="picture-skills">{skills}</div>
          <a
            className="learn-more"
            onClick={() => {
              handleLearnMore(id);
            }}
          >
            Learn More
          </a>
        </div>
      </div>
      <figcaption>{title}</figcaption>
    </div>
  );
}

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDataID: 0,
      modal: false
    };
    this.onClickLearnMore = this.onClickLearnMore.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.shuffle = new Shuffle(this.element, {
      itemSelector: '.picture-item',
      sizer: this.sizer
    });
    window.projectShuffleContainer = this.shuffle;
  }

  onClickLearnMore(id) {
    this.setState({
      modalDataID: id
    });
    this.toggle();
  }

  render() {
    const detailModalImageCounts = projects[this.state.modalDataID].imageCounts;
    const imagePrefix = projects[this.state.modalDataID].image;
    let detailImages = [];

    const { titleDetail, subtitle, description, url } = projects[
      this.state.modalDataID
    ];
    for (let index = 0; index < detailModalImageCounts; index++) {
      detailImages.push(
        <div>
          <img
            src={'images/projects/' + imagePrefix + '_' + index + '.png'}
            alt=""
          />
        </div>
      );
    }
    return (
      <React.Fragment>
        <PhotoGridFilter />
        <div
          className="row my-shuffle-container shuffle"
          ref={ref => (this.element = ref)}
        >
          {projects.map(project => (
            <Figure
              key={project.id}
              id={project.id}
              groups={project.groups}
              imageName={project.image}
              title={project.title}
              skills={project.skills}
              handleLearnMore={this.onClickLearnMore}
            />
          ))}
          <div
            ref={element => (this.sizer = element)}
            className="col-xs-1 col-sm-1 photo-grid__sizer"
          />
        </div>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="project-detail-modal"
        >
          <ModalBody>
            <Carousel>{detailImages}</Carousel>
            <div className="title">{titleDetail}</div>
            <div className="sub-title">{subtitle}</div>
            <div className="divider" />
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </ModalBody>
          <ModalFooter>
            {url && (
              <a
                href={url}
                className="visit-button"
                target="_blank"
                color="primary"
                onClick={this.toggle}
              >
                VISIT SITE
              </a>
            )}{' '}
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PhotoGrid;
