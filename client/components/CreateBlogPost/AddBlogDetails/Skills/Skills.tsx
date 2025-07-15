import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import SkillsAddModal from "./SkillsAddModal";
import { X } from "lucide-react";

const Skills = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const skills = useWatch({
    control,
    name: "skills",
  });

  const { remove } = useFieldArray({
    control,
    name: "skills",
  });
  return (
    <div>
      <SkillsAddModal />
      <div className="mt-3">
        {Array.isArray(skills) && skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-1"
              >
                {skill}
                <button onClick={() => remove(index)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No skills added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
