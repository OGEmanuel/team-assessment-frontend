import { Link } from 'react-router-dom';
import Back from '../../../components/UI/Back';

const AssessmentInstructions = () => {
  return (
    <div className="mt-[2.7rem] ml-6">
      <div className="flex gap-[16.5rem] mb-[3.8rem]">
        <Back />
        <h1 className="font-medium text-[2rem]">General Assessment</h1>
      </div>
      <div className="">
        <h2 className="text-center text-2xl font-medium mb-6">INSTRUCTIONS</h2>
        <div className="text-justify ">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor pellentesque lorem
            sit lectus phasellus neque sit. Ultricies hendrerit vitae nibh
            suspendisse elementum integer in elementum. Ultricies fusce ornare
            leo id et dui lacus turpis. Nec gravida ipsum pretium penatibus vel
            ipsum ut neque. In malesuada quam sed ultricies urna. Massa ut at
            cursus nec sodales augue. Eget ipsum morbi neque habitasse nisl nunc
            cursus. Nisi at eget ultrices tortor diam ornare sit et imperdiet.
            Eu eu diam nulla nibh. Est habitant donec ultrices commodo in ipsum
            fermentum. Eget ut lacus urna mi at venenatis et nisi. Consectetur
            in porta viverra est quis egestas. Facilisis hac facilisi tortor
            posuere vulputate nec non purus cras.
          </p>
          <p>
            Facilisis sollicitudin accumsan nunc quisque non sed non tellus.
            Consectetur cum urna condimentum adipiscing et magna sed fringilla.
            Lacus sit accumsan sit mi vitae eget nunc massa. Fringilla urna eget
            non in eget auctor. Orci volutpat in interdum nisi. Ullamcorper
            condimentum sit cursus sed pretium ultricies mattis eget ultricies.
            Ut nullam adipiscing sed diam id eu nibh tempus eget. Justo
            hendrerit magna non non vulputate varius egestas purus. Varius ut
            massa viverra nisl enim rhoncus maecenas ut. Sed enim justo
            condimentum in accumsan turpis vel viverra. Duis amet diam eu felis
            non. Integer ut commodo urna sit. Venenatis aliquam feugiat nulla
            tristique pulvinar eros pellentesque sapien donec.
          </p>
          <p>
            Feugiat sit non sagittis ut. Lacinia etiam lorem eget congue aliquam
            aenean consequat. Purus in arcu elementum vitae arcu cras at luctus
            amet. Et gravida dolor feugiat habitant. Ultricies quisque neque sed
            metus integer egestas. Semper posuere pretium luctus fermentum.
            Mauris eu ultrices arcu accumsan quis tellus vestibulum lobortis. Ac
            commodo enim ullamcorper diam imperdiet senectus purus. In amet sit
            dignissim porttitor sed quam vestibulum. Nibh varius ac eget
            molestie ultricies amet quisque. Imperdiet massa lacinia cras tortor
            magna. Tortor tellus turpis a venenatis.
          </p>
        </div>
      </div>
      <div>
        <Link to="">
          <p>Start Assessment</p>
        </Link>
      </div>
    </div>
  );
};

export default AssessmentInstructions;
