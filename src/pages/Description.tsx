// tslint:disable:max-line-length
import React from 'react';
import './css/fabric.min.css';
import './css/common.css';
import './css/Description.css';
import { assets } from '../util';

export default class Description extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='desc-container text'>
        <div className='space-lv1'></div>
        <h1>Project Description</h1>
        <h2>Why is it so urgent to deal with algae bloom?</h2>
        <p>
          As a highly reproducible algae, Cyanobacteria (blue-green algae) can reproduce infinitely as long as
          there is adequate nutrition, which leads to the outbreak of Cyanobacteria all over the world.
          Under the background of global warming and ocean acidification, large scale of Cyanobacteria bloom-forming
          is unavoidable. Not only responsible for water quality deterioration, landscape destroy and foul smell
          emission, Blue-green algae bloom is also accused of blocking gas exchange between water and air, causing
          serious death of aquatic organisms.
        </p>
        <p>
          Although a lot of resources and fund have been put on the treatment of algae bloom, the idea of early
          prevention and control has no ideal effect at present. On the one hand, there’s no single biological,
          chemical or physical method can reduce the level of nitrogen and phosphorus nutrients in water effectively.
          On the other hand, recent records of Great Lakes have proven that there’s no direct positive correlation
          between outbreaks of Cyanobacteria and the quantity of wastewater effluent, which overturns the conventional
          idea and makes precautionary measures undependable.
        </p>
        <p>
          That’s why we turn to comprehensive treatment after outbreaks and look for the wisdom from nature itself.
        </p>
        <hr />


        <h2>Which places are suffering from the algae bloom?</h2>
        People all over the world are facing the severe challenge brought by algae bloom.

        <div className='space-lv1'></div>
        <div className='ms-Grid' dir='ltr'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-lg12 ms-xl5'>
              <img src={assets.img.desc.pw1} style={{ width: '100%' }} />
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl7 desc-img-explain'>
              <h3 className='imgTitle'>Lake Victoria, Africa</h3><div className='space-lv1'></div>
              <p>
                In 2004, a toxic algae bloom on Lake Victoria temporarily suspended water supplies for Kisumu, Kenya,
                home to nearly 500,000 people.
              </p>
              <p>
                Photo courtesy Nikki McLeod via Flickr Creative Commons.
              </p><div className='space-lv1'></div><div className='space-lv1'></div>
            </div>
          </div>
        </div>

        <div className='space-lv1'></div>
        <div className='ms-Grid' dir='ltr'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-lg12 ms-xl5'>
              <img src={assets.img.desc.pw2} style={{ width: '100%' }} />
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl7 desc-img-explain'>
              <h3 className='imgTitle'>Lakes Erie, US-Canada</h3><div className='space-lv1'></div>
              <p>
                Microcystis-dominated bloom on Lake Erie, 2011, covering 67% of the lake area.
              </p>
              <p>
                Photograph by Peter Essick posted by National Geographic.
              </p><div className='space-lv1'></div><div className='space-lv1'></div>
            </div>
          </div>
        </div>

        <div className='space-lv1'></div>
        <div className='ms-Grid' dir='ltr'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-lg12 ms-xl5'>
              <img src={assets.img.desc.pw4} style={{ width: '100%' }} />
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl7 desc-img-explain'>
              <h3 className='imgTitle'>Lake Taihu, China</h3><div className='space-lv1'></div>
              <p>
                In 2007, more than 2 million people living in Wuxi, China, went without piped drinking
                water—some for longer than a week—after a bloom of the algae on Lake Taihu overwhelmed
                the city’s water plant.
              </p>
              <p>
                Credit: Hans Paerl, University of North Carolina.
              </p><div className='space-lv1'></div><div className='space-lv1'></div>
            </div>
          </div>
        </div>

        <div className='space-lv1'></div>
        <div className='ms-Grid' dir='ltr'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-lg12 ms-xl5'>
              <img src={assets.img.desc.pw5} style={{ width: '100%' }} />
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl7 desc-img-explain'>
              <h3 className='imgTitle'>Lake Biwa, Japan</h3>
              <p>
                The water quality of Lake Biwa started to deteriorate in the 1960's, resulting in
                algal blooms and red tides. Since then local residents and the local government have
                strived to improve the water quality, mostly by banning synthetic washing powders and
                improving the sewerage system.
              </p>
              <p>
                Photograph posted online.
              </p><div className='space-lv1'></div><div className='space-lv1'></div>
            </div>
          </div>
        </div>

        <div className='space-lv1'></div>
        <div className='ms-Grid' dir='ltr'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-lg12 ms-xl5'>
              <img src={assets.img.desc.pw6} style={{ width: '100%' }} />
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl7 desc-img-explain'>
              <h3 className='imgTitle'>The Baltic Sea, Northern Europe</h3>
              <div className='space-lv1'></div>
              <p>
                Vast algal blooms in northern Europe’s Baltic Sea fuel annual aquatic dead zones,
                where oxygen levels are too low to support most life.
              </p>
              <p>
                Photo courtesy European Space Agency.
              </p><div className='space-lv1'></div><div className='space-lv1'></div>
            </div>
          </div>
        </div>

        <div className='space-lv1'></div>
        <div className='ms-Grid' dir='ltr'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-lg12 ms-xl2'>
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl3'>
              <img src={assets.img.desc.pw7} style={{ width: '100%' }} />
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl7 desc-img-explain'>
              <h3 className='imgTitle'>The Caspian Sea, west Asia</h3>
              <div className='space-lv1'></div>
              <p>
                Algal blooms in the south Caspian Sea were first reported in 2005 (station A)
                when a bloom of Nodulariaspumigena extended over an area of 2 km2.
              </p>
              <p>
                Photograph posted online.
              </p><div className='space-lv1'></div><div className='space-lv1'></div>
            </div>
          </div>
        </div>

        <div className='space-lv1'></div>
        <div className='ms-Grid' dir='ltr'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-lg12 ms-xl5'>
              <img src={assets.img.desc.pw8} style={{ width: '100%' }} />
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl7 desc-img-explain'>
              <h3 className='imgTitle'>Murray River, Australia</h3>
              <div className='space-lv1'></div>
              <p>
                A toxic bloom on Australia’s Murray River in 2009 extended for more than 800 kilometers
                and prompted a “red alert” warning residents not to touch the water or drink untreated
                water.
              </p>
              <p>
                Photograph posted online.
              </p><div className='space-lv1'></div><div className='space-lv1'></div>
            </div>
          </div>
        </div>

        <hr />

        <h2>Where did our inspiration come from?</h2>
        <p>
          ‘From nature, to nature’, we always believe.
        </p>
        <p>
          Although the cyanobacteria have already provided us with many environment problems, we believe it is still possible to turn it into something useful. The cyanobacteria are rich in nutrients, but they have not been well used because of their strong cell walls and difficult to remove algae toxins.
        </p>
        <p>
          The best choice for nature problem is always hide in nature itself. Recently, we have found that the unique intracellular digestion mechanism of the Branchiostoma can degrade algae into nutrients such as amino acids and polysaccharides, and it can effectively degrade harmful substances such as algal toxins. This discovery provides a new perspective and feasible ideas for the development of algae resources.
        </p>

        <hr />

        <h2>What’s our core ideas?</h2>
        <p>Branchiostoma digest tract epithelial cells through the powerful digestion and immune function gene group, not only can directly degrade algae into amino acids, oligopeptides, oligosaccharides, oligonucleotides, fatty acids, vitamins and trace elements in the cell, and it can effectively degrade harmful substances such as algal toxins and achieve the purpose of directly converting algae into absorbable and non-toxic nutrients. Using is better than abandoning. According to our expectation, we can make cyanobacteria, which we once consider useless, become a huge fortune.
        </p>
        <p>
          The main feature of this project is ‘from nature, to nature’. We are focusing on the existing method in the natural world to solve ecological problems. On the one hand, the mechanism we used is clear, simple and efficient; on the other hand, the ecological security risks are low. Compared with the risk of introducing a foreign genome into the potential of conventional genetic engineering methods, the project adopts the idea of engineering production of functional proteins, which constitutes a high-efficiency reagent, and does not invest any external source into the ecosystem while efficiently treating cyanobacterial pollution.
        </p>
        <p>
          From salvage to use, we are moving on.
        </p>

        <hr />

        <h2>How do we make it true?</h2>
        <div className='ms-Grid' dir='ltr'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-lg12 ms-xl8'>
              <p>
                Because of the rareness of lancelet, genetic engineering is used to amplify the proteome of its internal digestive function.
              </p>
              <p>
                The full-field functional proteomic library of lancelet cecum epithelial cells which were constructed in vitro was sequenced with PacBio third-generation sequencing. The main effective components of the library were then annotated and analyzed by databases including Blastn, Blastx, SWISSPROT, KEGG, COG, Interpro and GO.
              </p>
              <p>
                Methods of artificial intelligence and bioinformatics are combined to further analyze and simplify the proteome. Libraries of the main functional genes of internal digestion mechanism are built after redundant genes are removed. Crosswise comparison with the digestive functional proteomes such as external digestion cathepsin of analogous species and analysis of special domains will be carried out to screen specific proteins. We will focus on protein products of genes like ferritin, VCBPs, and Big defensin, including the reaction rate, conditions (temperature, pressure and pH) and mechanism with harmful substances such as algal toxin. These parameters will be input into a model of convolutional neural network to determine several core proteins.
              </p>
            </div>
            <div className='ms-Grid-col ms-lg12 ms-xl4'>
              <img className='desc-img-nn' src={assets.img.desc.neuralNetwork} />
            </div>
          </div>

          <p>
            Gradient experiments will be conducted to explore the optimum reaction ratio and reaction conditions, which can lay the foundation of future industrialization.The processes involved in the digestion of cyanobacteria include cell walls breaking, tissue digestion, oxidation, sugar digestion and algal toxin degradation. Genetic engineering is used to construct plasmin with a positive feedback system to transcribe and translate the chosen genes in large quantities. Ion-mediated promoter and several repeated expression sequence will be inserted into E. coli using CRISPR/Cas9 so the biosynthetic pathway of core internal digestive protein can be built. During this procedure, the previous designing experience and data of BioBrick will be considered to reduce time and expense.
              </p>
          <img className='desc-img-exp' src={assets.img.desc.exp} />
        </div>

        <hr />

        <h3>What’s our future plan?</h3>
        <p>
          Once the method is proved efficiently in laboratory, We intend to combine with the demonstration project of algae pollution control in Tai Lake, Jiangsu Province and integrate algae fishing and treatment equipment such as algae killing wells, algae-water separation stations and algae digestion ponds, so as to make the degradation liquid reach the level of engineering application. Only by doing so can we achieve the ultimate goal of protecting Earth with our own strength.
        </p>
        <img className='desc-img-aw' src={assets.img.desc.algaeWell} />
      </div>
    );
  }
}

