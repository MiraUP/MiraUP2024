import React from 'react';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import Typography from '../../components/typography';

const Path = 'src/assets/img/banner/';
const ImgsBanner = [
  { item: Path + '1_1630599912156.png' },
  { item: Path + 'fitness_pro-preview_1_1620747741392.png' },
  { item: Path + 'preview_01_1616943936661.png' },
  { item: Path + 'preview_01_1625216203522.png' },
  { item: Path + 'preview-01_1610599939230.png' },
  { item: Path + 'preview-3_1636636114453.png' },
  { item: Path + 'slice-1_1621426038602.png' },
  { item: Path + 'ui8-details-6_1649773709276.png' },
];

const BannerSinglePage = () => {
  return (
    <section className="container anima-fade-left banner-infinity first-content">
      <div className="row">
        <div className="col">
          <Typography
            Component="h2"
            className="h1 fw-semibold text-center announcement"
          >
            80 itens <br />
            cadastrados
            <Typography Component="span" className="fw-light">
              Em breve você também poderá contribuir.
            </Typography>
          </Typography>

          <div className="marquee">
            <Marquee
              fade={false}
              direction="up"
              className="gap-[0rem] [--duration:10s]"
            >
              <div className="row gx-3">
                {ImgsBanner.map(({ item }, index) => (
                  <div className="col-6" key={index}>
                    <img
                      className="item"
                      src={item}
                      style={{ width: '100%', padding: '8px 0' }}
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSinglePage;
