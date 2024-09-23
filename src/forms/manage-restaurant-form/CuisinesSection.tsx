import { FormDescription, FormItem } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">Cuisines</h2>
            <FormDescription>
                Select the cuisines that your restaurant serves
            </FormDescription>
        </div>
        <FormField control={control} name="cuisines" render={({field}) => (
            <FormItem>
                
            </FormItem>
        )} />
    </div>
  )
};

export default CuisinesSection;