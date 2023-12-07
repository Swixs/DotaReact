import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddonHistory = () => {
   const history = [
      {
         firstChapterHistory: `The Font of Avernus is the source of a family's strength, a crack in 
         primal stones from which vapors of prophetic power have issued for generations. Each 
         newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism 
         they are given an innate connection to the mystic energies of the land. They grow up 
         believing themselves fierce protectors of their lineal traditions, the customs of the 
         realm--but what they really are protecting is the Font itself. And the motives of the 
         mist are unclear.`,
      },
   ];

   return (
      <div className={classAbaddonPage.history}>
         {history[0].firstChapterHistory}
         <br />
         <br />
         When the infant Abaddon was bathed in the Font, they say something went
         awry. In the child's eyes there flared a light of comprehension that
         startled all present and set the sacerdotes to whispering. He was
         raised with every expectation of following the path all scions of
         Avernus took--to train in war, that in times of need he might lead the
         family's army in defense of the ancestral lands. But Abaddon was always
         one apart. Where others trained with weapons, he bent himself to
         meditation in the presence of the mist. He drank deep from the vapors
         that welled from the Font, learning to blend his spirit with the
         potency that flowed from far beneath the House; he became a creature of
         the black mist.
         <br />
         <br />
         There was bitterness within the House Avernus--elders and young alike
         accusing him of neglecting his responsibilities. But all such
         accusations stopped when Abaddon rode into battle, and they saw how the
         powers of the mist had given him mastery over life and death beyond
         those of any lord the House had ever known.
         <br />
         <br />
      </div>
   );
};

export default AbaddonHistory;
