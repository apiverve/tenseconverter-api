from setuptools import setup, find_packages

setup(
    name='apiverve_tenseconverter',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Tense Converter rewrites text into past or future tense. Submit any passage with your chosen target tense to receive the transformed wording and a flag indicating whether the text changed.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/tenseconverter?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
