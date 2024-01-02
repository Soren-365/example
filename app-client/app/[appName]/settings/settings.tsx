'use client'
import { Input, Stack, FormControl, FormLabel, FormHelperText, Button, Heading } from '@chakra-ui/react'
import { useMemberStore } from "@/lib/store/appStore"
import { MemberStore } from "@/lib/store/appStore"
import { ChangeEvent, useEffect, useState } from 'react'
import { supabase } from '@/lib/utils/supabaseClient'
import { useRouter } from 'next/navigation';

export default function Settings({ id, userId, firstName, lastName, city, country, userName }: MemberStore) {
    console.log("member in settings", id, firstName, lastName, city, country, userName)

    const [firstNameForm, setFirstNameForm] = useState(firstName)
    const [lastNameForm, setLastNameForm] = useState(lastName)
    const [userNameForm, setUserNameForm] = useState(userName)
    const [cityForm, setCityForm] = useState(city)
    const [countryForm, setCountryForm] = useState(country)
    const [loading, setLoading] = useState(false)
    const router = useRouter();


    function handleUpdate(setForm: any, event: ChangeEvent) {
        const target = event.target as HTMLInputElement
        if (target && target?.value) {
        setForm(target?.value)
        }
    }

    useEffect(() => {
        console.log("first name form", firstNameForm)
        console.log("lastname form", lastNameForm)
    }, [firstNameForm, lastNameForm])


    async function handleSubmit() {

        console.log("submitting!")
        setLoading(true)
        const { error } = await supabase
            .from('members')
            .update({
                id: parseInt(id),
                user_id: userId,
                user_name: userNameForm,
                first_name: firstNameForm,
                last_name: lastNameForm,
                city: cityForm,
                country: countryForm
            })
            .eq('id', id)
        if (error) {
            console.log("error", error)
        } else {
            console.log("success", error)
        }

        const { data: member, error: memberError } = await supabase
            .from('members')
            .select('id, user_id, first_name, last_name, city, country, user_name')
            .eq('id', id)

        if (member && member[0]) {
    
            setFirstNameForm(member && member[0].first_name || "")
            setLastNameForm(member && member[0].last_name || "")
            setCityForm(member && member[0].city || "")
            setCountryForm(member && member[0].country || "")
            setUserNameForm(member && member[0].user_name || "")
        }
        setLoading(false)
    }



    return (
        <>
            <div className="card-1 border-b border-gray-200 bg-white p-10 px-4 sm:px-6">
                <Heading as='h3' size='lg' className=" font-semibold leading-6 text-gray-900">Member settings</Heading>

                <div className="max-w-[700px] mt-6 p-6">
                    <Stack spacing={3}>
                    <FormControl>
                            <FormLabel className='text-gray-500'>First Name</FormLabel>
                            <Input placeholder='-' value={userNameForm} onChange={(e) => handleUpdate(setUserNameForm, e)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel className='text-gray-500'>First Name</FormLabel>
                            <Input placeholder='-' value={firstNameForm} onChange={(e) => handleUpdate(setFirstNameForm, e)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel className='text-gray-500'>Last name</FormLabel>
                            <Input placeholder='-' value={lastNameForm} onChange={(e) => handleUpdate(setLastNameForm, e)} />
                        </FormControl>

                        <FormControl>
                            <FormLabel className='text-gray-500'>City</FormLabel>
                            <Input placeholder='-' value={cityForm} onChange={(e) => handleUpdate(setCityForm, e)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel className='text-gray-500'>Country</FormLabel>
                            <Input placeholder='-' value={countryForm} onChange={(e) => handleUpdate(setCountryForm, e)} />
                        </FormControl>
                        <div></div>
                        <div className='w-1/4'>
                            <Button className='w-full' colorScheme='blue' variant='solid' style={{ background: "blue" }} isLoading={loading} onClick={handleSubmit}>Update</Button>
                        </div>
                    </Stack>
                </div>
            </div>

        </>
    )
}
