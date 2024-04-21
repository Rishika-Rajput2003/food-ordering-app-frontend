import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type Props = {
    cuisine: string;
    field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckbox= ({cuisine, field}: Props) => {
    return (
        <FormItem className='flex flex-row items-center space-x-1 space-y-0 mt-2'>
            <FormControl>
                <Checkbox 
                className='bg-white'
                checked= {field.value.includes(cuisine)} 
                onCheckedChange={(checked)=> {
                    if(checked){
                        field.onChange([...field.value, cuisine]);
                    }
                    else{
                        field.onChange(
                            field.value.filter((value: string) => value !== cuisine)
                        );
                    }
                }}

                /*field.value= ["pizza, "pasta"]
                 cuisine= ["pizza"]
                 so checked will be true here 
                 if checked is true then add this cuisine to the list of cuisines the user has already selected to the end
                 else 
                 filterout the value from the array
                */
                />
            </FormControl>
            <FormLabel className='text-sm font-normal'>
                {cuisine}
            </FormLabel>
        </FormItem>
    )
}

export default CuisineCheckbox;
