export const OurCrew = () => {
  return (
    <section>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <cards>
        <card>
          <photo src="./public/crew/background-crew-tablet.jpg">
            <img src="./public/crew/image-anousheh-ansari.png" alt="Anousheh" />
          </photo>
          <h5>Anousheh Ansari</h5>
          <p>
            A former NASA astronaut with over 15 years of experience, Captain
            Ansari leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </card>
        <card>
          <photo src="./public/crew/background-crew-tablet.jpg">
            <img src="./public/crew/image-douglas-hurley.png" alt="Douglas" />
          </photo>
          <h5>Douglas Hurley</h5>
          <p>
            Our chief astrophysicist, Dr. Hurley, is a renowned scientist who
            has contributed to major space discoveries. He ensures that every
            journey is as educational as it is exhilarating.
          </p>
        </card>
        <card>
          <photo src="./public/crew/background-crew-tablet.jpg">
            <img src="./public/crew/image-mark-shuttleworth.png" alt="Mark" />
          </photo>
          <h5>Mark Shuttleworth</h5>
          <p>
            With his extensive background in aerospace engineering, Hana Lee is
            responsible for the state-of-the-art technology that powers our
            spacecraft. Her innovation ensures that our travelers are always in
            safe hands.
          </p>
        </card>
        <card>
          <photo src="./public/crew/background-crew-tablet.jpg">
            <img src="./public/crew/image-victor-glover.png" alt="Victor" />
          </photo>
          <h5>Victor Glover</h5>
          <p>
            As a mission specialist, Victor's job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </card>
      </cards>
    </section>
  );
};
