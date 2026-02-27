import { Deck, Slide, Heading, Text, Image, FlexBox, DefaultTemplate } from 'spectacle';
import Bilde1 from './assets/var.jpg';
import Bilde2 from './assets/IMG_2493.jpg';
import Bilde3 from './assets/IMG_2494.jpg';
import Bilde4 from './assets/IMG_2497.jpg';
import Bilde6 from './assets/IMG_2498.jpg';
import Bilde5 from './assets/IMG_2500.jpg';
import Bilde7 from './assets/IMG_2510.jpg';
import Bilde8 from './assets/IMG_2511.jpg';
import Bilde9 from './assets/IMG_2530.jpg';
import Bilde10 from './assets/IMG_2533.jpg';


function App() {
  return (
    <Deck template={<DefaultTemplate />}>
      
      {/* Slide 1: Tittel */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Praksis Presentasjon</Heading>
          <Text>Værnesregionen</Text>
        </FlexBox>
      </Slide>

      {/* Slide 2: Innhold */}
      <Slide>
        <Heading>Oppstart</Heading>
        <Text>
          Hilse på kollegaene <br />
          Bli kjent med arbeidsplassen <br />
          Få tilgang til nødvendige verktøy og systemer
        </Text>
      </Slide>

      <Slide>
        <Heading>Arbeidsoppgaver</Heading>
        <Text>
          Brukerstøtte <br />
          Case oppgave om password manager <br />
          BitWarden <br />
          Resultat
        </Text>
      </Slide>
      <Slide>
        <Heading>En del bilder</Heading>
        <FlexBox flexDirection="row" wrap="wrap" justifyContent="center">
        <Image src={Bilde1} alt="Bilde av Værnesregionen 1" width="20%" />
        <Image src={Bilde2} alt="Bilde av Værnesregionen 2" width="20%" />
        <Image src={Bilde3} alt="Bilde av Værnesregionen 3" width="20%" />
        <Image src={Bilde4} alt="Bilde av Værnesregionen 4" width="20%" />
        <Image src={Bilde5} alt="Bilde av Værnesregionen 5" width="20%" />
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Nettverk og brannmur</Heading>
        <FlexBox flexDirection="row" wrap="wrap" justifyContent="center">
        <Image src={Bilde5} alt="Bilde av Værnesregionen 5" width="30%" />
        </FlexBox>

      </Slide>

            <Slide>
        <Heading>En del bilder</Heading>
        <FlexBox flexDirection="row" wrap="wrap" justifyContent="center">
        <Image src={Bilde6} alt="Bilde av Værnesregionen 6" width="20%" />
        <Image src={Bilde7} alt="Bilde av Værnesregionen 7" width="20%" />
        <Image src={Bilde8} alt="Bilde av Værnesregionen 8" width="20%" />
        <Image src={Bilde9} alt="Bilde av Værnesregionen 9" width="20%" />
        <Image src={Bilde10} alt="Bilde av Værnesregionen 10" width="20%" />
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Oppsummering</Heading>
        <Text>
          Praksisopplevelse i Værnesregionen <br />
          Arbeidsoppgaver og erfaringer <br />
          Mange møter<br />
          Lært mye om hvordan de driver kommunene
        </Text>
      </Slide>

    </Deck>
  );
}

export default App;