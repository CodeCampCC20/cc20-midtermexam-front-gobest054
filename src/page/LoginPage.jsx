import React from 'react'

function LoginPage() {
  return (
       <div className="p-8">
      <div className="w-2/4 border border-pri-1 rounded-3xl p-8 mx-auto space-y-4">
        <h1 className="text-2xl text-fon-1">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4 pl-2">
          <InputForm
            id="email"
            placeholder="abc@mail.com"
            handleChange={handleChange}
            error={inputError.email}
            value={input.email}
            text="Email"
            icon={Mail}
          />

          <InputForm
            id="password"
            placeholder="Enter you password"
            handleChange={handleChange}
            error={inputError.password}
            value={input.password}
            text="password"
            icon={KeyRound}
            type="password"
          />

          <button
          disabled={isLoading}
          className="bg-pri-1 mt-8 text-fon-2 w-full py-2 rounded-2xl hover:bg-hov-1 hover:shadow-xl cursor-pointer flex items-center justify-center gap-1 font-bold duration-300">
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2.5} />
                <span>Loading ...</span>
              </>
            ) : (
              <>
                <LogInIcon className="w-5 h-5" strokeWidth={2.5} />
                <span>Login</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage