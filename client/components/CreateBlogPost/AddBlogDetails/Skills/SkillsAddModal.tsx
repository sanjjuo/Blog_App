import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const SkillsAddModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [skillInput, setSkillInput] = React.useState("");
  const { control } = useFormContext();
  const { append } = useFieldArray({
    control,
    name: "skills",
  });

  const handleSaveSkill = () => {
    if (skillInput.trim()) {
      append(skillInput.trim());
      setSkillInput("");
      setModalOpen(false);
      console.log("skills saved");
    }
  };

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 p-0 text-blue-600 font-bold"
        >
          <Plus className="w-5 h-5" />
          Add skill
        </Button>
      </DialogTrigger>

      <DialogContent className="w-96">
        <DialogHeader>
          <DialogTitle>Add skill</DialogTitle>
          <DialogDescription hidden />
        </DialogHeader>
        <div className="space-y-5">
          <FormField
            control={control}
            name="skills"
            render={() => (
              <FormItem>
                <FormLabel>Skill</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your skill"
                    className="h-12 focus:!ring-0"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onClick={handleSaveSkill} className="w-full">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillsAddModal;
