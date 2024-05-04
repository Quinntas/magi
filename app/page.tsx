'use client';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {PartyPopper, ShoppingCart} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import QuantityPicker from '@/components/quantity-picker';
import {ModeToggle} from '@/components/mode-toggle';

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({className, title, children, ...props}, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    },
);
ListItem.displayName = 'ListItem';

function Nav() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className={'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '}>
                                <ListItem title={'Sub Item 1 Title'} href={'/'}>
                                    Sub Item 1 Description
                                </ListItem>
                                <ListItem title={'Sub Item 2 Title'} href={'/'}>
                                    Sub Item 2 Description
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className={'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '}>
                                <ListItem title={'Sub Item 1 Title'} href={'/'}>
                                    Sub Item 1 Description
                                </ListItem>
                                <ListItem title={'Sub Item 2 Title'} href={'/'}>
                                    Sub Item 2 Description
                                </ListItem>
                                <ListItem title={'Sub Item 3 Title'} href={'/'}>
                                    Sub Item 3 Description
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="#" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Item Three</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}

function TestImg() {
    return (
        <>
            <Link
                href={'#'}
                className={'flex items-center justify-center flex-col w-full group gap-[10px] min-w-[300px] shrink-0'}
            >
                <Image
                    src={'https://i.imgur.com/yFHlluu_d.webp?maxwidth=760&fidelity=grand'}
                    alt=""
                    width={200}
                    height={600}
                    className="shrink-0 group-hover:hidden block"
                />
                <Image
                    src={'https://i.imgur.com/yFHlluu_d.webp?maxwidth=760&fidelity=grand'}
                    alt=""
                    width={200}
                    height={600}
                    className="shrink-0 group-hover:block hidden"
                />
                <div className="flex flex-col text-left items-start justify-start w-full opacity-0 group-hover:opacity-100 transition-opacity ease-in-out  ">
                    <span className={''}>Test</span>
                    <span className={''}>R$ 32.33</span>
                </div>
            </Link>
        </>
    );
}

export default function Home() {
    const [mock, setMock] = useState(0);

    return (
        <>
            <div className="w-full h-full p-[30px] px-[5%] flex flex-col gap-[30px] py-[20px]">
                <div className={'flex items-center justify-between'}>
                    <Link href={'/'} className={'font-bold text-4xl'}>
                        Magi
                    </Link>
                    <Button
                        variant={'ghost'}
                        className={
                            'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-[10px] py-[5px] rounded-lg flex items-center gap-[10px]'
                        }
                    >
                        <PartyPopper color="white" />
                        <span className={'text-white font-medium text-lg'}>Lorem ipsum door armet</span>
                    </Button>

                    <Sheet>
                        <SheetTrigger>
                            <ShoppingCart />
                        </SheetTrigger>
                        <SheetContent
                            className={
                                'w-[100%] sm:w-[500px] sm:max-w-screen px-[10px] h-full flex flex-col justify-between'
                            }
                        >
                            <span className={'text-xl'}>CART (2)</span>
                            <div className={'flex flex-col w-full h-full mt-[30px]'}>
                                <div className={'flex gap-[10px] shrink-0'}>
                                    {/*TODO make overflow hidden*/}
                                    <Image
                                        src={'https://i.imgur.com/yFHlluu_d.webp?maxwidth=760&fidelity=grand'}
                                        alt=""
                                        width={100}
                                        height={200}
                                        className={'shrink-0rounded overflow-hidden'}
                                    />
                                    <div className={'flex flex-col gap-[10px] justify-between py-[5px] w-full '}>
                                        <div className={'flex flex-col'}>
                                            <span>Lorem ipsum door armet</span>
                                            <span>SIZE: 1</span>
                                        </div>
                                        <span>R$ 123.23</span>
                                        <div className="flex items-center w-full justify-between">
                                            <QuantityPicker
                                                quantity={mock}
                                                setQuantity={(a) => {
                                                    setMock(a);
                                                }}
                                            />
                                            <Button variant={'ghost'}>
                                                <span className={'text-muted-foreground opacity-50 font-light'}>
                                                    REMOVE
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col gap-[10px]'}>
                                <div className={'flex items-center justify-between'}>
                                    <span>SUBTOTAL</span>
                                    <span>R$ 123.23</span>
                                </div>
                                <Button className={'w-full'}>
                                    <span>CHECK OUT</span>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div
                    className={
                        'grid grid-cols-1 shrink-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-[100px] overflow-y-auto'
                    }
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((a, i) => {
                        return <TestImg key={i} />;
                    })}
                </div>

                <footer className="flex items-center gap-[10px] justify-between">
                    <span>Copyright text</span>

                    <div className={'flex gap-[10px] items-center'}>
                        <Button variant={'ghost'}>
                            <span>Privacy</span>
                        </Button>
                        <Button variant={'ghost'}>
                            <span>Terms of use</span>
                        </Button>
                    </div>
                </footer>
            </div>
        </>
    );
}
