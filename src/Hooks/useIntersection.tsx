
export const useInview = () => {

    const inView = (items: Element , options: IntersectionObserverInit | undefined) => {
        return new Promise<void>((resolve) => {
            const observe = new window.IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        resolve()
                    }
                  })
            }, options)
            observe.observe(items)
        })
    }

    return {inView}
}