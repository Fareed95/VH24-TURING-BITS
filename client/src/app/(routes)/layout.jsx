import { useUserContext } from '@/app/context/Userinfo';

export default function RootLayout({children}) {


  // const { contextisLoggedIn,contextsetIsLoggedIn,contextsetEmail,contextsetName} = useUserContext();
  const Getuserinfo = async () => {
    const token = localStorage.getItem('authToken');
    try {
<<<<<<< HEAD
        const response = await fetch('https://nutriscan-1ahz.onrender.com/api/user',
=======
        const response = await fetch('https://nutriscan-1ahz.onrender.com/api/user',
>>>>>>> origin/main
        {
            method: 'GET',
            headers: {
              "Authorization":token,
              'Content-Type': "application/json",
            },
            credentials: 'include',
          }
<<<<<<< HEAD

          );
      if (!response.ok) {

        throw new Error('Failed to fetch user info'); // Handle error properly

      }
      if (response.ok){
        const result = await response.json();

=======

          );
      if (!response.ok) {

        throw new Error('Failed to fetch user info'); // Handle error properly

      }
      if (response.ok){
        const result = await response.json();

>>>>>>> origin/main
      contextsetIsLoggedIn(true)
      contextsetEmail(result.email)
      contextsetName(result.name)
      toast({
        title: "Successfully Logged in",
        // description: result?.message,
<<<<<<< HEAD

      });
      }

=======

      });
      }

>>>>>>> origin/main

    } catch (error) {
      console.error("Error fetching user info:", error);
    }
<<<<<<< HEAD

  };
  Getuserinfo()
=======

  };
  // Getuserinfo()
>>>>>>> origin/main
  return (

      <main>
      <div className="bg-dot-white/[0.18] min-h-screen bg-black">
          {children}
        </div>
      </main>
<<<<<<< HEAD

=======

>>>>>>> origin/main
  );
}
